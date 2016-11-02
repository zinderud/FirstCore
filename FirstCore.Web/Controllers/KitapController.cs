using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FirstCore.Web.Providers;
using FirstCore.Web.Entities;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace FirstCore.Web.Controllers
{
    public class KitapController : Controller
    {
        IKitapProvider kp;
        public KitapController()
        {
            kp = new KitapProvider();
        }
        public IActionResult Index()
        {
            var model = kp.GetAll();
            return View(model);
        }

        [HttpPost]
        public IActionResult Ekle( )
        {
            return View();
        }
        [HttpGet]
        public IActionResult Ekle(Kitap kitap)
        {
            var model = new Kitap(kitap.KitapId, kitap.KitapAdi,  kitap.Tur);
            kp.Add(model);
            return View();
        }
    }
}
