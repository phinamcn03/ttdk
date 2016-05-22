using System.IO;
using System.Web;
using System.Collections;

namespace FWS.Framework.Web.TemplateController
{
    public class CTemplateViewManager
    {
        public static CContentsResponse RenderView(string path)
        {
            return RenderView(path, null);
        }

        //path: Mods/Items/CurrencyEntry
        //data: {a:'-', b:'--'}

        //>>>>
        //path: Mods/Items/CurrencyEntry/2012/03/08
        //data: {a:'-', b:'--'}
        //>>data: {a:'-', b:'--', p1: '2012', p2:'03', p3: '08'}
        public static CContentsResponse RenderView(string path, object data)
        {
            path = path.Replace(".ascx", "");
            int paraSlashIndex = path.IndexOf('/', path.IndexOf('/', path.IndexOf('/',0)+1)+1);
            string paraString = "";
            if (paraSlashIndex <= 0)
            {
                paraSlashIndex = path.Length;
            }
            else
            {
                paraString = path.Substring(paraSlashIndex );
            }

            string controlPath = path.Substring(0, paraSlashIndex);
            controlPath += ".ascx";

            string[] parasvalue = paraString.Split('/');
           
            for (int i = 1; i < parasvalue.Length;i++ )
            {
                ((System.Collections.IDictionary)data).Add("p" + (i).ToString(),parasvalue[i]);
            }           
        

            CTemplatePage pageHolder = new CTemplatePage();
            CTemplateUserControl viewControl =
                (CTemplateUserControl)pageHolder.LoadControl(controlPath);

            if (viewControl == null)
                return CContentsResponse.Empty;

            if (data != null)
            {
                viewControl.Data = data;
            }

            pageHolder.Controls.Add(viewControl);

            string result = "";
            using (StringWriter output = new StringWriter())
            {
                HttpContext.Current.Server.Execute(pageHolder, output, false);
                result = output.ToString();
            }

            return new CContentsResponse(
                    result,
                    viewControl.StartupScript,
                    viewControl.CustomStyleSheet
                    );
        }
    }
}
