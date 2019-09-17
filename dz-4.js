console.log('N1');
var a = 'hel\tlo';
console.log(a);
var b = 'win\tdows',
    c = 'ja\tva\tscript',
    d = 'an\tgu\tlar'
console.log(b);
console.log(c);
console.log(d);

console.log('N2');
var str = 'Asd532';
console.log(str.indexOf('5'));

var str2 = 'qwerty2';
if (str2.indexOf(1) != -1) {
    alert(str2.indexOf(1));
} else {
    console.log('не найдено');
}

var str3 = 'oop344';
var str4 = 'gg103';
console.log(str4.indexOf('13'));
if (str4.indexOf('13') != -1) {
    alert(str4.indexOf(13));
} else {
    console.log('не найдено');
}

console.log('N3')
var str5 = 'asd';
var number = 3;
if (str5.length === number) {
    console.log(str5);
} else {
    console.log('They are not equal');
}

var str6 = 'Hello, World!';
var number1 = 10;
if (str6.length === number1) {
    console.log(str6);
} else {
    console.log('They are not equal');
}

var str7 = 'I am decode student';
var number2 = 19;
if (str7.length === number2) {
    console.log(str7);
} else {
    console.log('They are not equal');
}

console.log('N4');

var alphabet = 'Vladimir';
var result = alphabet.split('').reverse().join('');
var result = result.charAt(0).toUpperCase() + result.substr(1);
console.log(result);

var alphabet1 = 'Shalash';
var result1 = alphabet1.split('').reverse().join('');
var result1 = result1.charAt(0).toUpperCase() + result1.substr(1);
console.log(result1);

console.log('N6');
var text = 'hello my name is Fox';
console.log(text.replace('my', '').concat(' my'));

var text1 = 'You will be best programmer in the world!';
console.log(text1.replace('best', '').concat(' be'));
//console.log(text.concat(' my'));

console.log('N5');
//----