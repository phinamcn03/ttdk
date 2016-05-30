using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Services;
using System.IO;
using System.Net.Mail;
using System.Configuration;
using System.Text.RegularExpressions;
using FWS.Framework.Log;
using System.Net;
using System.Security.Cryptography.X509Certificates;
using System.Net.Security;

namespace VTNT.Service.Callcenter
{
    /// <summary>
    /// Summary description for CallcenterService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class CallcenterService : System.Web.Services.WebService
    {

       
        [WebMethod]
        public string SendMail(string strAddrTo, string strAddCC, string strAddBCC, string strSubject, string strBody, string strFileName1, byte[] bFileContent1, string strFileName2, byte[] bFileContent2, string strFileName3, byte[] bFileContent3)
        {
            try
            {
                strSubject = strSubject.Replace("\r", "");
                strSubject = strSubject.Replace("\n", "");
                MemoryStream msAttFile1 = null;
                if (bFileContent1 != null && !strFileName1.Trim().Equals(""))
                    msAttFile1 = new MemoryStream(bFileContent1);

                MemoryStream msAttFile2 = null;
                if (bFileContent2 != null && !strFileName2.Trim().Equals(""))
                    msAttFile2 = new MemoryStream(bFileContent2);

                MemoryStream msAttFile3 = null;
                if (bFileContent3 != null && !strFileName3.Trim().Equals(""))
                    msAttFile3 = new MemoryStream(bFileContent3);

                //Gui mail
                if (msAttFile1 == null)
                    return SendMessage(strAddrTo, strSubject, strBody);

                return SendMessageWithAttachment(strAddrTo, strAddCC, strAddBCC, strSubject, strBody, strFileName1, msAttFile1, strFileName2, msAttFile2, strFileName3, msAttFile3);


            }
            catch (Exception ex)
            {
                return "01-" + ex.Message;
            }
        }

        /// <summary>
        /// Transmit an email message to a recipient without
        /// any attachments
        /// </summary>
        /// <param name="sendTo">Recipient Email Address</param>
        /// <param name="sendFrom">Sender Email Address</param>
        /// <param name="sendSubject">Subject Line Describing Message</param>
        /// <param name="sendMessage">The Email Message Body</param>
        /// <returns>Status Message as String</returns>
        [WebMethod]
        public static string SendMessage(string sendTo,
            string sendSubject, string sendMessage)
        {
            try
            {
                // validate the email address
                bool bTest = ValidateEmailAddress(sendTo);

                // if the email address is bad, return message
                if (bTest == false)
                    return "Invalid recipient email address: " + sendTo;
                //Mail From
                string sendFrom = ConfigurationManager.AppSettings["MailFrom"].ToString();

                // create the email message 
                MailMessage message = new MailMessage(
                   sendFrom,
                   sendTo,
                   sendSubject,
                   sendMessage);
                message.IsBodyHtml = true;

                // create smtp client at mail server location
                SmtpClient client = new SmtpClient();
                client.Credentials = new System.Net.NetworkCredential(ConfigurationManager.AppSettings["MailFrom"].ToString(), ConfigurationManager.AppSettings["MailPass"].ToString());
                client.Port = Convert.ToInt32(ConfigurationManager.AppSettings["MailPort"].ToString());
                client.Host = ConfigurationManager.AppSettings["MailHost"].ToString();
                client.EnableSsl = Convert.ToBoolean(ConfigurationManager.AppSettings["MailSsl"].ToString());

                // send message
                CLogManager.WriteSL("SendMessage", "To: " + sendTo + " Subject: " + sendSubject);
                ServicePointManager.ServerCertificateValidationCallback =
                                    delegate (object s, X509Certificate certificate,
                                             X509Chain chain, SslPolicyErrors sslPolicyErrors)
                                    { return true; };
                client.Send(message);
                CLogManager.WriteSL("SendMessage", "Message sent");
                return "00-Message sent to " + sendTo + " at " + DateTime.Now.ToString() + ".";
            }
            catch (Exception ex)
            {
                CLogManager.WriteSL("SendMessage", "Error: " + ex.Message);
                return "01-" + ex.Message.ToString();
            }
        }

        /// <summary>
        /// Transmit an email message with
        /// attachments
        /// </summary>
        /// <param name="sendTo">Recipient Email Address</param>
        /// <param name="sendFrom">Sender Email Address</param>
        /// <param name="sendSubject">Subject Line Describing Message</param>
        /// <param name="sendMessage">The Email Message Body</param>
        /// <param name="attachments">A string array pointing to the location of each attachment</param>
        /// <returns>Status Message as String</returns>

        private static string SendMessageWithAttachment(string sendTo, string sendCC, string sendBCC,
            string sendSubject, string sendMessage, String strFilename1, Stream sFile1, string strFilename2, Stream sFile2, string strFilename3, Stream sFile3)
        {
            try
            {
                sendTo = sendTo.Replace(";", ",");
                sendCC = sendCC.Replace(";", ",");
                sendBCC = sendBCC.Replace(";", ",");
                sendSubject = sendSubject.Replace("\r", "");
                sendSubject = sendSubject.Replace("\n", "");
                // validate email address
                bool bTest = ValidateEmailAddress(sendTo);

                if (bTest == false)
                    return "Invalid recipient email address: " + sendTo;
                string sendFrom = ConfigurationManager.AppSettings["MailFrom"].ToString();
                // Create the basic message
                MailMessage message = new MailMessage(
                   sendFrom,
                   sendTo,
                   sendSubject,
                   sendMessage);
                message.IsBodyHtml = true;
                //message.CC = new MailAddressCollection();
                if (!string.IsNullOrEmpty(sendCC))
                    message.CC.Add(sendCC);

                //message.Bcc = new MailAddressCollection();
                if (!string.IsNullOrEmpty(sendBCC))
                    message.Bcc.Add(sendBCC);

                // The attachments arraylist should point to a file location where
                // the attachment resides - add the attachments to the message
                if (sFile1 != null)
                {
                    Attachment attached = new Attachment(sFile1, strFilename1);
                    message.Attachments.Add(attached);
                }
                if (sFile2 != null)
                {
                    Attachment attached = new Attachment(sFile2, strFilename2);
                    message.Attachments.Add(attached);
                }
                if (sFile3 != null)
                {
                    Attachment attached = new Attachment(sFile3, strFilename3);
                    message.Attachments.Add(attached);
                }

                // create smtp client at mail server location
                SmtpClient client = new SmtpClient();
                client.Credentials = new System.Net.NetworkCredential(ConfigurationManager.AppSettings["MailFrom"].ToString(), ConfigurationManager.AppSettings["MailPass"].ToString());
                client.Port = Convert.ToInt32(ConfigurationManager.AppSettings["MailPort"].ToString());
                client.Host = ConfigurationManager.AppSettings["MailHost"].ToString();
                client.EnableSsl = Convert.ToBoolean(ConfigurationManager.AppSettings["MailSsl"].ToString());

                // send message
                CLogManager.WriteSL("SendMessageWithAttachment", "To: " + sendTo + " Subject: " + sendSubject);
                client.Send(message);
                CLogManager.WriteSL("SendMessageWithAttachment", "Message sent");
                return "00-Message sent to " + sendTo + " at " + DateTime.Now.ToString() + ".";
            }
            catch (Exception ex)
            {
                CLogManager.WriteSL("SendMessageWithAttachment", "Error: " + ex.ToString());
                return "01-" + ex.Message;
            }
        }

        /// <summary>
        /// Confirm that an email address is valid
        /// in format
        /// </summary>
        /// <param name="emailAddress">Full email address to validate</param>
        /// <returns>True if email address is valid</returns>
        private static bool ValidateEmailAddress(string emailAddress)
        {
            return true;
            /*
            try
            {
                string TextToValidate = emailAddress;
                Regex expression = new Regex(@"\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}");

                // test email address with expression
                if (expression.IsMatch(TextToValidate))
                {
                    // is valid email address
                    return true;
                }
                else
                {
                    // is not valid email address
                    return false;
                }
            }
            catch (Exception)
            {
                throw;
            }
             * */
        }

        
    }
}
