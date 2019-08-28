console.log('Документ 2');

console.log('N1');
var x = 3;
var y;
if (x < 0) {
  y = x;
} else if (x > 30) {
  y = x ** 2;
} else if (0 <= x < 30) {
  y = 0;
}
console.log(y);

var x = -10;
var y;
if (x < 0) {
  y = x;
} else if (x > 30) {
  y = x ** 2;
} else if (0 <= x < 30) {
  y = 0;
}
console.log(y);

var x = 100;
var y;
if (x < 0) {
  y = x;
} else if (x > 30) {
  y = x ** 2;
} else if (0 <= x < 30) {
  y = 0;
}
console.log(y);


console.log('N2');
var a = 6,
  b = 10;
if (a % 2 == 0 && b % 2 == 0) {
  console.log((a * b) ** 2);
} else if (a % 2 != 0 && b % 2 != 0) {
  console.log(a + b);
} else {
  console.log((a / b) + (a * b));
}

var a = 20,
  b = 5;
if (a % 2 == 0 && b % 2 == 0) {
  console.log((a * b) ** 2);
} else if (a % 2 != 0 && b % 2 != 0) {
  console.log(a + b);
} else {
  console.log((a / b) + (a * b));
}

var a = 3,
  b = 5;
if (a % 2 == 0 && b % 2 == 0) {
  console.log((a * b) ** 2);
} else if (a % 2 != 0 && b % 2 != 0) {
  console.log(a + b);
} else {
  console.log((a / b) + (a * b));
}

console.log('N3');
var a = 6,
  b = 10,
  c = 20;
if (a <= b <= c) {
  a = c;
  b = c;
  c = c;
} else if (a > b && b > c) {
  a ** 2;
  b ** 2;
  c ** 2;
} else {
  a = a * (-1);
  b = b * (-1);
  c = c * (-1);
}
console.log(a, b, c);

var a = 20,
  b = 5,
  c = -1;
if (a <= b <= c) {
  a = c;
  b = c;
  c = c;
} else if (a > b && b > c) {
  a = a ** 2;
  b = b ** 2;
  c = c ** 2;
} else {
  a = a * (-1);
  b = b * (-1);
  c = c * (-1);
}
console.log(a, b, c);


var a = 3;
var b = 5;
var c = -10;

if (a <= b <= c) {
  a = c;
  b = c;
  c = c;
} else if (a > b && b > c) {
  a = a ** 2;
  b = b ** 2;
  c = c ** 2;
} else {
  a = a * (-1);
  b = b * (-1);
  c = c * (-1);
}
console.log(a, b, c);

console.log('N4');
/*const login = 'admin';
const password = 'secret';
var log = 'user';
var pass = 'user';
if (login === log && password === pass) {
  alert('Вы успешно авторизировались');
} else if (login != log) {
  alert("Пользователя с данным логином не зарегистрирован");
} else if (password != pass) {
  alert("Вы неверно ввели пароль");
}*/

/*const login = 'admin';
const password = 'secret';
var log = 'admin';
var pass = 'secret';
if (login === log && password === pass) {
  alert('Вы успешно авторизировались');
} else if (login != log) {
  alert("Пользователя с данным логином не зарегистрирован");
} else if (password != pass) {
  alert("Вы неверно ввели пароль");
}*/


/*const login = 'admin';
const password = 'secret';
var log = 'admin';
var pass = 'notsecret';
if (login === log && password === pass) {
  alert('Вы успешно авторизировались');
} else if (login != log) {
  alert("Пользователя с данным логином не зарегистрирован");
} else if (password != pass) {
  alert("Вы неверно ввели пароль");
}*/

console.log('N5');
var a = 5;
if (a === 5 || a === 10 || a === 14 || a === 100) {
  a = a ** 3;
} else {
  console.log(Math.abs(a));
}
console.log(a);


var a = 7;
if (a === 5 || a === 10 || a === 14 || a === 100) {
  a = a ** 3;
} else {
  console.log(Math.abs(a));
}


var a = -17;
if (a === 5 || a === 10 || a === 14 || a === 100) {
  a = a ** 3;
} else {
  console.log(Math.abs(a));
}

console.log('N6');

var numbr = 22;
if (numbr % 11 == 0) {
  numbr = numbr + 20;
} else if (numbr > 0 && numbr % 2 == 0) {
  numbr = numbr - 5;
} else {
  Math.pow(numbr, 2);
}
console.log(numbr);

var numbr = 40;
if (numbr % 11 == 0) {
  numbr = numbr + 20;
} else if (numbr > 0 && numbr % 2 == 0) {
  numbr = numbr - 5;
} else {
  Math.pow(numbr, 2);
}
console.log(numbr);

var numbr = -5;
if (numbr % 11 == 0) {
  numbr = numbr + 20;
} else if (numbr > 0 && numbr % 2 == 0) {
  numbr = numbr - 5;
} else {
  console.log(Math.pow(numbr, 2))
}

console.log('N7');
/*a = parseInt(prompt("a:"));
b = parseInt(prompt("b:"));
c = parseInt(prompt("c:"));
if ((b < a && a < c) || (c < a && a < b)) alert(a);
if ((a < b && b < c) || (c < b && b < a)) alert(b);
if ((a < c && c < b) || (b < c && c < a)) alert(c);*/

/* условия не работают var a = 10;
var b = 5;
var c = 4;
if (b > a > c || b < a < c) {
  console.log('"A" среднее число');
} else if (a > b > c || a < b < c) {
  console.log('"B" среднее число');
} else if (a > c > b || a < c < b) {
  console.log('"С" cреднее число');
}*/

console.log('N8');
/*var n = 2100;
if (n % 400 == 0 || n % 4 == 0 && n % 100 != 0) {
  alert('Обычный');
} else if (n % 400 == 0 || n % 4 == 0 && n % 100 == 0) {
  alert('Обычный');
}*/

var n = 2100;
if (n % 400 == 0 || n % 4 == 0 && n % 100 != 0) {
  alert('Високосный год');
} else if (n % 400 != 0 || n % 4 != 0) {
  alert('Обычный');
}

var n = 2400;
if (n % 400 == 0 || n % 4 == 0 && n % 100 != 0) {
  alert('Високосный год');
} else if (n % 400 != 0 || n % 4 != 0) {
  alert('Обычный');
}

var n = 2004;
if (n % 400 == 0 || n % 4 == 0 && n % 100 != 0) {
  alert('Високосный год');
} else if (n % 400 != 0 || n % 4 != 0) {
  alert('Обычный');
}

var n = 2001;
if (n % 400 == 0 || n % 4 == 0 && n % 100 != 0) {
  alert('Високосный год');
} else if (n % 400 != 0 || n % 4 != 0) {
  alert('Обычный');
}


