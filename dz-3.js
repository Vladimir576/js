console.log("Документ 3");

console.log('N1');
var a;
for (a = 10; a <= 35; a++) {
    console.log(a + a);
}

/*-----console.log('N2');
var n = 7;
var b;
for (b = 5; b < n; b++) {
    i = n * b;
    console.log(i);
}------------*/

console.log('N3');
var n;
var m;
for (n = 10, m = 15; n <= m; n++) {
    console.log(n);
}

console.log('N4');
var n;
var m;
for (n = 10, m = 20; n <= m; n++) {
    if (n % 3 == 0) {
        console.log(n);
    }
}

console.log('N5');
var n;
var m;
var k;

for (n = 20, m = 43, k = 5; n <= m; n++) {
    if (n % k == 0) {
        console.log(n);
    }
}

console.log('N6');
//Даны два числа n, m вывести n в степени m;Не использовать Math.pow() и **Решать с помощью циклов;
var n;
var m;
function func(n, m) {
    n = m;
    for (var k = 0; k < m; k++) {
        n *= m
    }
    return n;
};
let result = func(3, 3);
console.log(result);

