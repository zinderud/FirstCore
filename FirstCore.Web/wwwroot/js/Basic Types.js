//boolean
var Oldumu = false;
//sayı
var decimal = .2;
var hex = 0xf00d;
//string
var color = "red";
var adsoyad = "kemal sendea";
var yas;
var birlikte = "merhaba ${adsoyad}  senin yasın= ${yas}";
//Array
var liste = [1, 2, 3,];
//tuple
var x;
x = ["merhaba", 23];
console.log(x[0].substr(1));
//console.log(x[1].substr(1)); hata çünkü string değil
console.log(x[1].toString);
// enum
var renk;
(function (renk) {
    renk[renk["siyah"] = 1] = "siyah";
    renk[renk["kırmızı"] = 2] = "kırmızı";
    renk[renk["yaşil"] = 3] = "yaşil";
})(renk || (renk = {}));
var c = renk.kırmızı;
//any
var emindegilim = 45;
emindegilim.ifItExists();
//ayrıntılı incele
//void
function hatamesaji() {
    alert("hata mesajı veriyor");
}
// hiçbirşey atanmamış değişken
var u = undefined;
var n = null;
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
