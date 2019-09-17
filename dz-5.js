console.log('N1');
var massiv = [1, 3, 9, 2, 4, 6];
var sumOdd = 0;
var sumEven = 0
var production = 1

for (var i = 0; i < massiv.length; i++) {
    if (massiv[i] % 2 == 0)
        sumEven += massiv[i];
    else
        sumOdd += massiv[i];
    production *= massiv[i];
}
console.log(sumEven, sumOdd, production);

console.log('N2');
var n = 5;
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(n));

var n = 6;
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(n));

var n = 3;
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(n));

console.log('N3');
var word = 'hello';
var h = 3;
String.prototype.repeat = function (n) {
    word = this;
    for (var i = 0; i <= n; i++) {
        return word = word + ' ' + word
    }
}

console.log(word.repeat(h));


console.log('N4');

var massiv = [1, 2, -500, -3, 905];
var sum = 0;

for (var i = 0; i <= massiv.length; i++) {
    if (massiv[i] > 0) {
        sum = sum + massiv[i]
    }//
}

console.log(sum);


console.log('N5');
var str = "array",
    symbol = "r";
if (str.includes(symbol) == true) {
    str = str.slice(0, 2) + str.slice(3)
    console.log(str);
}

var str = 'function';
var symbol = 'n';

if (str.includes(symbol) == true) {
    console.log(str = str.slice(0, 2) + str.slice(3));
} else {
    console.log(str);
}

var str = 'flex';
var symbol = 'z';
if (str.includes(symbol) == true) {
    console.log(str = str.slice(0, 2) + str.slice(3));
} else {
    console.log(str);
}


console.log('N6');
var str = "array",
    symbol = "r";
console.log((str.split(symbol).length - 1));

var str = "function",
    symbol = "n";
console.log((str.split(symbol).length - 1));

var str = "flex",
    symbol = "z";
console.log((str.split(symbol).length - 1));

console.log('N7');
// var massiv = [1, 1, 1, 1, -1];
// if (massiv === 1) {
//     alert('Yes');
// } else {
//     alert('No');
// }

// var massiv = [10, 10, 10, 10];
// if (massiv === 10) {
//     alert('Yes');
// } else {
//     alert('No');
// }

console.log('N8')

var aa = [50, 43, 109, 66, 2, 5];
for (var i = 0; i <= aa.length; i++) {
    if (aa[i] % 2 !== 0) {
        delete aa[i];
    }
}
console.log(aa);

var aa = [50, 43, 109, 66, 2, 5];
for (var i = 0; i <= aa.length; i++) {
    if (aa[i] % 2 === 0) {
        aa[i] = 1;
    }
}
console.log(aa);

var aa = [50, 43, 109, 66, 2, 5];

for (var i = 0; i <= aa.length; i++) {

    if (aa[i] > 40) {
        console.log(aa[i]);
    }
}
console.log(aa);

var aa = [50, 43, 109, 66, 2, 5].reduce((a, b) => a * b);
console.log(aa);
// 2 == '2' == true
// 2 === '2' == false

console.log('N9');
var massiv = ['array', 'function', 'swift', 'program', 'flex', 'device'];

for (var i = 0; i <= massiv.length; i++) {
    if (massiv[i].length > 5) {
        console.log(massiv[i].substring(1));
    }
}


//Переделать[massiv[0], massiv[1]] = [massiv[1], massiv[0]], [massiv[2], massiv[3]] = [massiv[3], massiv[2]], [massiv[4], massiv[5]] = [massiv[5], massiv[4]];
console.log(massiv);
