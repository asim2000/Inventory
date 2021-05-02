
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace Business.Constants
{
    public static class Messages
    {
        public static string AuthorizationDenied = "Icazeniz yoxdu";

        public static string CategoryAdded = "Cateqoriya elave olundu";
        
        public static string ProductAdded = "Mehsul elave olundu";
        public static string ProductDeleted = "Mehsul silindi";
        public static string ProductUpdated = "Mehsul guncellendi";

        public static string OrderAdded = "Sifaris elave edildi";
        public static string OrderDeleted = "Sifaris legv edildi";
        public static string OrderUpdated="Sifaris guncellendi";

        public static string CustomerUpdated = "Musteri guncellendi";
        public static string CustomerAdded="Musteri elave edildi";
        public static string CustomerDeleted="Musteri silindi";

        //public static string ProductCountDenied = "Daxil etdiyiniz miqdarda mehsul yoxdur";
    }
}
