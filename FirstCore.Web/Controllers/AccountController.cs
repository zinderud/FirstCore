using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FirstCore.Web.Entities;
using Microsoft.AspNetCore.Identity;
using FirstCore.Web.ViewModels;

namespace FirstCore.Web.Controllers
{
    public class AccountController : Controller
    {
        private SignInManager<User> _signInManager;
        private UserManager<User> _userManager;
        public AccountController(UserManager<User> userManager,
                                   SignInManager<User> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpGet]
         public IActionResult Register()
        {
            return View();
        }
        [HttpPost,ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(RegisterUserViewModel model)
        {
            var user = new User { UserName = model.Username };
            var createResult = await _userManager.CreateAsync(user, model.Password);
            if(createResult.Succeeded)
            {
                await _signInManager.SignInAsync(user, false);
                return RedirectToAction("Index", "Home");
            }
            else
            {
                foreach (var error in createResult.Errors)
                {
                    ModelState.AddModelError("", error.Description);
                }
            }

            return View();

        }

        [HttpPost ,ValidateAntiForgeryToken]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }
        [HttpGet]
        public IActionResult Login()
        {
            return View();

        }

        [HttpPost,ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                var loginResoult = await _signInManager.PasswordSignInAsync(model.Username,
                    model.Password, model.RememberMe, false);
                if(loginResoult.Succeeded)
                {
                    if(Url.IsLocalUrl(model.ReturnUrl))
                    {
                        return Redirect(model.ReturnUrl);
                    }
                    else
                    {
                        return RedirectToAction("Index","Home");
                    }
                }
            }
            ModelState.AddModelError("", "Could not Login");
            return View(model);
        }
           
    }
}
