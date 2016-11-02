using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCore.Web.ViewModels
{
    public class RegisterUserViewModel
    {
        [Required, MaxLength(256)]
        public string Username { get; set; }

        [Required,DataType(DataType.Password)]
        public string Password { get; set; }
        [DataType(DataType.Password),Compare(nameof(Password))]
        public string ConfirmPassord { get; set; }

    }
}
