
// EJERCISIO 1A
/* let la, lb , lc, lh, resultadoP, resultadoA;
const NUM=2;
la = parseInt (prompt ("Lado A:"));
lb = parseInt (prompt ("Lado B:"));
lc = parseInt(prompt ("Lado C:"));
lh = parseInt(prompt ("Lado H:"));

resultadoP = la+lb+lc;
resultadoA = lb*lh/NUM;

document.write (resultadoP,' Perimetro y ', resultadoA, ' Area.'); */


/////////////////////////////////////////////////////////////////////////////////


//EJERCISIO 1B

/* var a, b, resultadoP, resultadoA;
const NUM=2;

a = parseInt(prompt('Lado A:'));
b = parseInt(prompt('Lado B:'));

resultadoP = NUM*(b+a);
resultadoA = b*a;

document.write (resultadoP,' Perimetro y ', resultadoA, ' Area.'); */


////////////////////////////////////////////////////////////////////////////////

//EJERCISIO 1C

/* var a = parseInt(prompt('Lado A:')), resultadoP, resultadoA;
const NUM = 4;

resultadoP = NUM * a;
resultadoA = a * a;

document.write (resultadoP,' Perimetro y ', resultadoA, ' Area.'); */

/////////////////////////////////////////////////////////////////////////////////


//EJERCISIO 1D

/* var r, resultadoP, resultadoA;
const PI=3.1416, NUM=2;

r = parseInt(prompt('Lado R:'));

resultadoP = PI * (NUM*r);
resultadoA = PI * r *r;

document.write (resultadoP,' Perimetro y ', resultadoA, ' Area.'); */

/////////////////////////////////////////////////////////////////////////////////

function NumAleatorio(min, max) {
    return Math.floor(Math.random()*(max - min)) + min;
}

let array = [];

for (let i = 0; i <= 9; i++) {
    array.push(NumAleatorio(1, 100));
}

document.write(array);

document.write(array)
