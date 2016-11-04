interface ilkValue {
    label: string;
}
declare function ilkyaz(ilkobj: ilkValue): void;
declare let myobj: {
    size: number;
    label: string;
};
interface KareAyar {
    color?: string;
    width?: number;
}
declare function KareOlustur(config: KareAyar): {
    color: string;
    alan: number;
};
declare let kare1: {
    color: string;
    alan: number;
};
interface SearchFunc {
    (source: string, substring: string): boolean;
}
declare let mysearch: SearchFunc;
interface StringArray {
    [index: number]: string;
}
declare let myArray: StringArray;
declare let myStr: string;
interface Shape {
    color: string;
}
interface Square extends Shape {
    sideLength: number;
}
declare let square: Square;
