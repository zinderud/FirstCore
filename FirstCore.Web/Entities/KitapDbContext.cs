using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCore.Web.Entities
{
    public class KitapDbContext:IdentityDbContext<User>
    {
        public KitapDbContext(DbContextOptions options):base(options)
        {

        }

      public  DbSet<Kitap> Kitaps { get; set; }
    }
}
