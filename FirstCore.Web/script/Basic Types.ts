
//boolean

let Oldumu :boolean=false;

//sayı

let decimal:number=.2;
let hex:number=0xf00d

//string

let color:string="red";



let adsoyad:string ="kemal sendea";
let yas=255;

let birlikte:string ="merhaba ${adsoyad}  senin yasın= ${yas}";


//Array
let liste:number[]=[1,2,3,]


//tuple

let x:[string,number];

x=["merhaba",23];

console.log(x[0].substr(1));
//console.log(x[1].substr(1)); hata çünkü string değil
console.log(x[1].toString);

// enum

enum renk{
siyah=1,kırmızı=2,yaşil=3
}

let c:renk=renk.kırmızı;


//any

let emindegilim:any=45;

emindegilim.ifItExists();
//ayrıntılı incele

//void


function  hatamesaji():void{
    alert("hata mesajı veriyor");
}

// hiçbirşey atanmamış değişken
let u: undefined = undefined;
let n: null = null;

// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}