var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Hayvan = (function () {
    function Hayvan(hayvanIsim) {
        this.isim = hayvanIsim;
    }
    Hayvan.prototype.move = function (olcu) {
        if (olcu === void 0) { olcu = 0; }
        console.log(this.isim + " olcu " + olcu + "m.");
    };
    return Hayvan;
}());
var araba = (function () {
    function araba(modelismi) {
        this.isim = modelismi;
    }
    return araba;
}());
var bmw = (function (_super) {
    __extends(bmw, _super);
    function bmw() {
        _super.call(this, "cxs");
    }
    return bmw;
}(araba));
var ara = new araba("sada");
//# sourceMappingURL=classe.js.map