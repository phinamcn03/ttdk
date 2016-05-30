using System;
using System.Collections.Generic;
using System.Windows.Forms;
using CefSharp;
using FWS.TTDKGDTS.ImportTool.ServiceReference;
using FWS.TTDKGDTS.ImportTool._Global;
using iProfileUtils;
using System.Diagnostics;
using FWS.VnAccounting.Service.Data.Utils;
using FWS.TTDKGDTS.ImportTool._Core;

namespace FWS.TTDKGDTS.ImportTool
{
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            try
            {
                if (!GetUpdate()) return;

                Application.EnableVisualStyles();
                Application.SetCompatibleTextRenderingDefault(false);
                Application.Run(new FMain());

                GC.Collect(GC.MaxGeneration, GCCollectionMode.Forced);
                GC.WaitForPendingFinalizers();

                CEF.Shutdown();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private static bool GetUpdate()
        {
            string input = CXML.AddAuthenticate( "<RequestParams Function=\"VersionInfo\" />");
            string data = CServiceReference.CoreService.GetContextData(CSession.CLIENT_KEY, input);

            List<CVersionInfo> versions = CObjectMapper.FromCSV<CVersionInfo>(data, 1);
            if (versions != null && versions.Count > 0)
            {
                
                //Neu co version moi
                IniFile mIni = new IniFile(Application.StartupPath + "\\Version.ini");
                string currentVersion = Application.ProductVersion;// mIni.IniReadValue("Version", "iProfile_TradingOnline");
                //Neu co Version moi
                if (!currentVersion.Equals(versions[0].Version))
                {
                    //Luu version va link download vao file Ini de chuong trinh update cap nhat
                    mIni.IniWriteValue("Version", "iProfile_TradingOnline", versions[0].Version);
                    mIni.IniWriteValue("Link", "iProfile_TradingOnline", versions[0].LinkUpdate);

                    //Goi chuong trinh update
                    Process prLiveUpdate = new Process();
                    prLiveUpdate.StartInfo.FileName = Application.StartupPath + "\\LiveUpdate.exe";
                    prLiveUpdate.Start();
                    //GlobalDeleteAtom(Atom);
                    return false;
                }
            }
           
            return true;
        }
    }

    public class CVersionInfo
    {
        public string Version { get; set; }
        public string LinkUpdate { get; set; }
    }
}
