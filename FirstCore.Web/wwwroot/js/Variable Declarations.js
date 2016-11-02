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
for (var i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
}
