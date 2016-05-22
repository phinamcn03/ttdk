using System;
using System.Collections.Generic;

using System.Reflection;
using System.IO;
using System.Web;

namespace FWS.Framework.Web.TemplateController
{
    public class CCommand
    {
        #region Command functionality

        private string m_CommandName = "";

        public CCommand(string commandName)
        {
            m_CommandName = commandName;
        }

        public static CCommand Create(string commandName)
        {
            return new CCommand(commandName);
        }

        public object Execute(object data)
        {
            Type type = this.GetType();
            MethodInfo method = type.GetMethod(m_CommandName);
            object[] args = new object[] { data };
            try
            {
                return method.Invoke(this, args);
            }
            catch (Exception ex)
            {
                // TODO: Add logging functionality
                throw;
            }
        }

        #endregion

        #region Public execution commands
        protected bool IsStaticFile(string viewPath)
        {
            bool ret = false;
            viewPath = viewPath.ToLower();
            if (viewPath.EndsWith(".htm") ||
                viewPath.EndsWith(".html") ||
                viewPath.EndsWith(".txt"))
                ret = true;
            return ret;
        }
        protected string GetViewPath(string viewPath)
        {
            if (!IsStaticFile(viewPath))
                viewPath += ".ascx";
            return viewPath;
        }

        /// <summary>
        /// returns rendered control's string representation.
        /// object "data" should be passed from javascript method 
        /// as array of objects consisting of two objects,
        /// first - pageID - integer identificator by which we will
        /// lookup real control path; second object may be some data
        /// that the control needs.
        /// </summary>
        public object GetTemplatePage(object data)
        {
            bool errorLogged = false;
            try
            {
                Dictionary<string, object> param = (Dictionary<string, object>)data;
                string actionView = (string)param["actionView"];
                object actionData = param["actionData"];
                if (!String.IsNullOrEmpty(actionView))
                {
                    if (IsStaticFile(actionView))
                    {
                        string result = "";
                        using (TextReader tr =
                            new StreamReader(
                                HttpContext.Current.Server.MapPath(actionView)
                                )
                            )
                        {
                            result = tr.ReadToEnd();
                        }
                        return new CContentsResponse(result, string.Empty, string.Empty);
                    }
                    else
                    {
                        string viewPath = GetViewPath(actionView);
                        return CTemplateViewManager.RenderView(viewPath, actionData);
                    }
                }
            }
            catch (Exception ex)
            {
                // Log error
                errorLogged = true;
            }
            if (!errorLogged)
            {
                // Log custom error saying 
                // we did not find the page
            }
            return CContentsResponse.Empty;
        }
        #endregion
    }
}
