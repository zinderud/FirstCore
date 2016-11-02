using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FirstCore.Web.Entities;

namespace FirstCore.Web.Providers
{
    public class KitapProvider : IKitapProvider
    {
        List<Kitap> KitapList;
        public KitapProvider()
        {
            KitapList = new List<Kitap>()
            {
                new Kitap(1,"kevir",KitapTur.Felsefe),
                new Kitap(2,"vafıf",KitapTur.Bilimkurgu),
                new Kitap(3,"Cavidname",KitapTur.Felsefe),
                new Kitap(4,"gülün adi",KitapTur.Roman)
            };
        }
        public void Add(Kitap kitap)
        {
            var k = new Kitap();
            k.KitapId = kitap.KitapId;
            k.KitapAdi = kitap.KitapAdi;
            k.Tur = kitap.Tur;
            KitapList.Add(k);
        }

        public Kitap Get(int id)
        {
            return KitapList.Where(z => z.KitapId == id).FirstOrDefault();
        }

        public IEnumerable<Kitap> GetAll()
        {
            return KitapList;
        }
    }
    public class KitapSqlProvider : IKitapProvider
    {
        private KitapDbContext context;
        public KitapSqlProvider(KitapDbContext _context)
        {
            context = _context;
        }
        public void Add(Kitap kitap)
        {
            context.Add(kitap);

        }

        public Kitap Get(int id)
        {
            return context.Kitaps.Where(z => z.KitapId == id).FirstOrDefault();

        }

        public IEnumerable<Kitap> GetAll()
        {
            return context.Kitaps;
        }
        public void Submit()
        {
            context.SaveChanges();
        }
    }
}
