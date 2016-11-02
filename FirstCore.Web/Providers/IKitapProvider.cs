using FirstCore.Web.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCore.Web.Providers
{
    interface IKitapProvider
    {
        void Add(Kitap kitap);
        IEnumerable<Kitap> GetAll();
        Kitap Get(int id);


    }
}
