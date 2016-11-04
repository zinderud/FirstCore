function ilkyaz(ilkobj) {
    console.log(ilkobj.label);
}
var myobj = { size: 1, label: "yazsana" };
ilkyaz(myobj);
function KareOlustur(config) {
    var yeniKare = { color: "black", alan: 100 };
    if (config.color) {
        yeniKare.color = config.color;
    }
    if (config.width) {
        yeniKare.alan = config.width * config.width;
    }
    return yeniKare;
}
var kare1 = KareOlustur({ color: "" });
var mysearch;
mysearch = function (source, substring) {
    var result = source.search(substring);
    if (result == -1)
        return false;
    else {
        return true;
    }
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
var square = {};
square.sideLength = 12;
square.color = "blue";
//# sourceMappingURL=Interfaces.js.map