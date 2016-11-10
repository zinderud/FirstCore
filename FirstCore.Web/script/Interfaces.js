"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var mec = (function () {
    function mec(horse, engineTyp) {
        this.horse = horse;
        this.engineTyp = engineTyp;
    }
    ;
    mec.prototype.start = function (calback) {
        var _this = this;
        window.setTimeout(function () {
            calback(true, _this.engineTyp);
        }, 1000);
    };
    return mec;
}());
var sadess = (function () {
    function sadess(a, b) {
        this.serd = b;
        this.str = a;
    }
    return sadess;
}());
var sadee = (function (_super) {
    __extends(sadee, _super);
    function sadee(a, b) {
        _super.call(this, a, b);
    }
    return sadee;
}(sadess));
var sad = (function () {
    function sad() {
        this._item = new Array();
    }
    sad.prototype.ekle = function (item) {
        this._item.push(item);
    };
    sad.prototype.bul = function (varw) {
        var k = this._item.filter(function (x) { return x.olmali == varw.olmali; });
    };
    return sad;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sad;
//# sourceMappingURL=Interfaces.js.map