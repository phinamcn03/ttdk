using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Core
{
    public class CSession : CHttpContext
    {
        private int mUserID = 0;
        private string mUserName;
        private string mSession = "";
        private string mCulture = "vi-VN";
        private int mLanguageID = 0;

        public int UserID
        {
            get
            {
                GetUserID();
                return mUserID;
            }
            set
            {
                mUserID = value;
                SetUserID(value.ToString());
            }
        }
        public string Session
        {
            get
            {
                GetSession();
                return mSession;
            }
            set
            {
                mSession = value;
                SetSession(value);
            }
        }
        public string UserName
        {
            get
            {
                GetUserName();
                return mUserName;
            }
            set
            {
                mUserName = value;
                SetUserName(value);
            }
        }
        public string Culture
        {
            get
            {
                GetCulture();
                return mCulture;
            }
            set
            {
                mCulture = value;
                SetCulture(value);
            }
        }

        private void GetUserID()
        {
            if (GetCookies("FWS:ACCOUNTING:USER.ID") != null)
            {
                mUserID = Convert.ToInt32(GetCookies("FWS:ACCOUNTING:USER.ID"));
            }
        }

        private void SetUserID(string value)
        {
            if (Cookies != null)
            {
                SetCookies("FWS:ACCOUNTING:USER.ID", value);
            }
        }
        private void GetUserName()
        {
            if (GetCookies("FWS:ACCOUNTING:USER.NAME") != null)
            {
                mUserName = GetCookies("FWS:ACCOUNTING:USER.NAME");
            }
        }

        private void SetUserName(string value)
        {
            if (Cookies != null)
            {
                SetCookies("FWS:ACCOUNTING:USER.NAME", value);
            }
        }
        private void GetSession()
        {
            if (GetCookies("FWS:ACCOUNTING:USER.SESSION") != null)
            {
                mSession = GetCookies("FWS:ACCOUNTING:USER.SESSION");
            }
        }

        private void SetSession(string value)
        {
            if (Cookies != null)
            {
                SetCookies("FWS:ACCOUNTING:USER.SESSION", value);
            }
        }

        private void GetLanguageID()
        {
            if (GetCookies("LanguageID") != null)
            {
                mLanguageID = Convert.ToInt32(GetCookies("LanguageID"));
            }
        }

        private void SetLanguageID(string value)
        {
            if (Cookies != null)
            {
                SetCookies("LanguageID", value);
            }
        }

        private void GetCulture()
        {
            if (GetCookies("Culture") != null)
            {
                mCulture = GetCookies("Culture");
            }
        }

        private void SetCulture(string value)
        {
            if (Cookies != null)
            {
                SetCookies("Culture", value);
            }
        }
        #region "Cookie Access Method"
        private static string GetCookies(string key)
        {
            HttpCookie cookie = Cookies[key];
            if (cookie != null)
            {
                return cookie.Value.ToString();
            }
            else
            {
                return null;
            }
        }
        private static void SetCookies(string key, string value)
        {
            HttpCookie cookies = new HttpCookie(key);
            cookies.Value = value;
            cookies.Expires = DateTime.Now + new TimeSpan(24, 0, 0);
            Cookies.Add(cookies);
        }
        private static void SetCookies(string key, string value, DateTime expiredTime)
        {
            HttpCookie cookies = new HttpCookie(key);
            cookies.Value = value;
            cookies.Expires = expiredTime;
            Cookies.Add(cookies);
        }
        private static void DeleteCookies(string key)
        {
            if (Cookies[key] != null)
                Cookies[key].Expires = DateTime.Now.AddDays(-10);
        }
        #endregion
    }
}