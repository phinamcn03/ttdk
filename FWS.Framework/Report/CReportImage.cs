using System;
using System.Collections.Generic;
using System.Text;

namespace FWS.Framework.Report
{
    [Serializable]
    public class CReportImage
    {
        public string FileName;
        public string Location;
        public byte[] Content;

        public CReportImage()
        {
        }
    }
}
