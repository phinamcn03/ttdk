using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Runtime.Serialization.Formatters.Binary;
using System.IO;
using System.Drawing;
namespace FWS.Framework.Utils
{
    public class CBinaryUtils
    {
        public static byte[] SerializeObject(object obj)
        {
            BinaryFormatter bformatter = new BinaryFormatter();
            using (MemoryStream ms = new MemoryStream())
            {
                bformatter.Serialize(ms, obj);
                byte[] buffer = ms.ToArray();
                return buffer;
            }
        }
        public static object DeSerializeObject(byte[] array)
        {
            BinaryFormatter bformatter = new BinaryFormatter();
            using (MemoryStream ms = new MemoryStream(array))
            {
                object obj =bformatter.Deserialize(ms);
                return obj;
            }
        }
        public static string BinaryToBase64(byte[] array)
        {
            return Convert.ToBase64String(array,Base64FormattingOptions.None);
        }

        public static byte[] Base64ToBinary(string base64)
        {
            return Convert.FromBase64String(base64);
        }

        public static Image BinaryToImage(byte[] array)
        {
            if (array == null) return null;
            // Convert Base64 String to byte[]
            MemoryStream ms = new MemoryStream(array, 0,
              array.Length);

            // Convert byte[] to Image
            ms.Write(array, 0, array.Length);
            Image image = Image.FromStream(ms, true);
            return image;
        }

    }
}

