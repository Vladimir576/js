// var str = 'programming';
// for (var i = 0; i < str.length; i++) {

//     if (str[0] === str[1] || str[1] === str[2]) {
//         console.log(' Identical');
//         console.log(str.replace(/[^m]/g, "").length);

//     } else if (str[0] !== str[1] || str[1] !== str[2]) {
//         console.log('No identical');
//         console.log(str.replace(/[^m]/g, "").length);

//     }
// }

// var str = 'GGG';
// for (var i = 0; i < str.length; i++) {
//     if (str[0] === str[1] && str[1] === str[2]) {
//         console.log('Identical');
//         console.log(str.replace(/[^m]/g, "").length);
//     } else if (str[0] !== str[1] && str[1] !== str[2]) {
//         console.log('No identical')
//         console.log(str.replace(/[^m]/g, "").length);
//     }

// }

// var str = "ggg";
// var character = 'programming';
// var firstCharcter = str[0];

// var isIdential = true;

// for (var i = 0; i < str.length; i++) {
//     if (isIdential) {
//         if (str[i] != firstCharcter) {
//             isIdential = false;
//         }
//     }
// }
// console.log(isIdential)

// var word = "hellow world";
// var letter = 'l';
// var repeatTimes = 0;

// for (var i = 0; i <= word.length; i++) {
//     if (word[i] === letter) {

// {подсчитывает повторение определенного элемента}

//         repeatTimes++;
//     }
// }
// console.log(repeatTimes)

console.log('N1');
var arr = [1, 2, 3, 4, 5];
var sum = 0;
var result;

function arifmetic(arr) {
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        result = sum / arr.length;
    };
    console.log(result);
};
arifmetic(arr);

var arr = [13, 24, 35, 46];
var sum = 0;
var result;
function arifmetic(arr) {
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        result = sum / arr.length;
    };
    console.log(result);
};
arifmetic(arr);

var arr = [-68, 325, 33, 40, 2, 8];
var sum = 0;
var result;
function arifmetic(arr) {
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        result = sum / arr.length;
    };
    console.log(result.toFixed(2));
};
arifmetic(arr);

console.log('N2');
var massiv = [1, 13, 99, 440, 55];
var p = [35, 2, 65, 7, 8, 9, 12, 121, 33, 99];

Array.prototype.max = function (massiv) {
    return Math.max.apply(null, this);
};
//объяснения
Array.prototype.min = function (massiv) {
    return Math.min.apply(null, this);
};
console.log(("Max value is: " + massiv.max() + "\nMin value is: " + massiv.min()));


console.log('N3')
var massiv = [];
var n = 5;
function answer(massiv, n) {
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            massiv.push(i);
        }
    }
    console.log(massiv);
};
answer(massiv, n);


var massiv = [];
var n = 5;
function reply(massiv, n) {
    for (var i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            massiv.push(i);
        }
    }
    console.log(massiv);
};
reply(massiv, n);

var massiv = [];
var n = 5;


function square(massiv, n) {
    for (var i = 1; i <= n; i++) {
        if (i % 2 == 0 && i < n) {
            massiv.push(i);
        }
    }
    console.log(massiv);
};
square(massiv, n);

var massiv = [];
var n = 12;
function answer2(massiv, n) {
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            massiv.push(i);
        }
    }
    console.log(massiv);
};
answer2(massiv, n);


var massiv = [];
var n = 12;
function reply2(massiv, n) {
    for (var i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            massiv.push(i);
        }
    }
    console.log(massiv);
};
reply2(massiv, n);

var massiv = [];
var n = 12;

function square2(massiv, n) {
    for (var i = 1; i <= n; i++) {
        if (i % 2 == 0 && i < n) {
            massiv.push(i);
        }
    }
    console.log(massiv);
};
square2(massiv, n);

console.log('N4');


var str = "GGG";
var firstCharcter = str[0];

var isIdential = true;

for (var i = 0; i < str.length; i++) {
    if (isIdential) {
        if (str[i] != firstCharcter) {
            isIdential = false;
        }
    }
}

var str = "Programming";
var firstCharcter = str[0];

var isIdential = true;

for (var i = 0; i < str.length; i++) {
    if (isIdential) {
        if (str[i] != firstCharcter) {
            isIdential = false;
        }
    }
    console.log(isIdential)
}
console.log('N5');
var massiv = [0, true, false, false, '1', 1]

for (var i = 0; i < massiv.length; i++) {
    if (massiv[i] === massiv[i + 1]) {
        // console.log(`${massiv[i]} и ${massiv[i + 1]}`);
        console.log('true')
    }
    else if (massiv[i] !== massiv[i + 1]) {
        console.log('false');
    }
}

for (var i = 0; i < massiv.length; i++) {
    if (massiv[i] >= 0) {
        console.log(massiv[i]);
    }
}
