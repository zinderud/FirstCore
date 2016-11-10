interface ilkValue {
    label: string;
}

function ilkyaz(ilkobj: ilkValue) {
    console.log(ilkobj.label);
}

let myobj = { size: 1, label: "yazsana" };
ilkyaz(myobj);



interface KareAyar {
    color?: string;//optional param
    width?: number;

}

function KareOlustur(config: KareAyar): { color: string; alan:number }
{
    let yeniKare= { color: "black", alan:100};
    if (config.color)
    {
    yeniKare.color = config.color;
    }
    if (config.width)
    {
        yeniKare.alan = config.width * config.width;
    }
    return yeniKare;

}

let kare1 = KareOlustur({ color: "" });


//read only
//interface Point {
//    readonly x: number;
//readonly y: number;
//}


interface SearchFunc {
    (source: string, substring: string): boolean;//interface de fonksiyonun dönüşü boolean
}

let mysearch: SearchFunc;
mysearch = function (source: string, substring: string) {

    let result = source.search(substring);
    if (result == -1)
        return false;
    else { return true;}


}

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];


interface Shape{ color: string; }
interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.sideLength = 12;
square.color = "blue";



interface IEngine {

    start(calback:(startStatus:boolean,engineTyp:string)=>void):void
}

class mec implements IEngine{
    constructor(public horse: number, public engineTyp: string) { };
    dur: boolean;
    start(calback: (startStatus: boolean, engineTyp: string) => void) {
        window.setTimeout(() => {
            calback(true, this.engineTyp);
        }, 1000);
    }

 
}


class sadess {

    str: string;
    serd: number;
    constructor(a: string, b: number) {
        this.serd = b;
        this.str = a;}
}

  class sadee extends sadess   {
      constructor(a:string,b:number) {
          super(a,b);

      }
}


  interface sadeli {
      olmali: string;
  }

  export default class sad<T extends sadeli>{
      public _item: Array<T> = new Array<T>();

      ekle(item: T): void {
          this._item.push(item);
      }
      bul(varw: T) {

          let k = this._item.filter(x => x.olmali == varw.olmali);
      }

  }