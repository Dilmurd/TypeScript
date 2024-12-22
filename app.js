// 1-masala
function Juftsonlar(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 0)
            sum += i;
    }
    return sum;
}
// 2-masala
function TrueQiymat(value) {
    return value ? 1 : 0;
}
// 3-masalas
function Boshxarfi(name) {
    return name.slice(0, 2);
}
// 4-masala
function ButunSon(num) {
    return Math.round(num + 2);
}
// 5-masala
function ToStr(num) {
    return (num + 1).toString();
}
// 6-masala
function Boo(str) {
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        console.log(char);
    }
}
// 7-masala
function TeskariQiymat(n) {
    var result = [];
    for (var i = n; i >= -n; i--) {
        result.push(i);
    }
    return result;
}
// 8-masala
function foo(value) {
    return value === 1;
}
// 9-masala
function booo(name, nationality) {
    return "My name is ".concat(name, ". I'm ").concat(nationality, ".");
}
console.log(Juftsonlar(7));
console.log(TrueQiymat(true));
console.log(Boshxarfi("Toshpolat"));
console.log(ButunSon(5.3));
console.log(ToStr(4));
Boo("salom dunyo");
console.log(TeskariQiymat(2));
console.log(foo(1));
console.log(booo("Teshavoy", "Qozogistondan"));
