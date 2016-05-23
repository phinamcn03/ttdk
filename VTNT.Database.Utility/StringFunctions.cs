using System;
using System.Data;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using Microsoft.SqlServer.Server;
using VTNT.Database.Utility.String;

public partial class UserDefinedFunctions
{
    [Microsoft.SqlServer.Server.SqlFunction]
    public static SqlString ConvertUNICODEToHopToUNICODE(SqlString str)
    {
        string sTohop = str.ToString();
        sTohop = CStringConvert.ToHopToUnicode(sTohop);
        // Put your code here
        return new SqlString(sTohop);
    }
};

