using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCore.Web.Entities
{
    public class Kitap
    {
        public int KitapId { get; set; }
        public string KitapAdi { get; set; }
        public KitapTur Tur { get; set; }
        public Kitap(int id,string ad,KitapTur tur)
        {
            KitapId = id;
            KitapAdi = ad;
            Tur = tur;

        }

        public Kitap()
        {
        }
    }
}
