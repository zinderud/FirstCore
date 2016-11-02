//var declarations
function fdm() {
    var message = "merhaba";
    return message;
}
function f() {
    var a = 10;
    return function gelse() {
        var b = a + 1;
        return b;
    };
}
var getir = f();
getir(); //11 getirir
//scope rules
function fds(yukluOlmali) {
    if (yukluOlmali) {
        var x = 10;
    }
    return x;
}
fds(true); // 10
fds(false); //undefined
function matriksToplami(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currrentRow = matrix[i];
        for (var i = 0; i < currrentRow.length; i++) {
            sum += currrentRow[i];
        }
    }
    return sum;
}
function fdsa(input) {
    var a = 100;
    if (input) {
        var b = a + 1;
        var c = a + 1;
        return b;
    }
    // return b; let hata veririr çünkü {} içinde local değişken
    return c;
}
//# sourceMappingURL=Variable Declarations.js.map