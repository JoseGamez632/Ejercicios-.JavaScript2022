
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

/* let array = [];
//llenar array
for (let i = 0; i <= 9; i++) {
    array.push(NumAleatorio(1, 100));
}
document.write(array); */

let array = [];

for (let i = 0; i <= 9; i++) {
    array[i] = parseInt(prompt('Digita las edades de 10 personas entre los 1 y 120 años.'));
    
}

document.write(array);

//Menores de edad
const MenorEdad = array.filter(Xnum => Xnum <= 18);
document.write("<br>",' • Tenemos ', MenorEdad.length, ' menores de edad de ',MenorEdad, ' años.')

//Mayores de edad

const MayorEdad = array.filter(Xnum => Xnum >= 18);
document.write("<br>",'• Tenemos ', MayorEdad.length, ' mayores de edad de ',MayorEdad, ' años.')

//Edad mayor y menor

    let Min = array[0];
    let Max = array[0];

    for (let i = 0; i < array.length; i++) {
        if (Min > array[i]) {
            Min = array[i]
        }
        if (Max < array[i]) {
            Max = array[i]
        }
    }

    document.write('<br>','• La persona con menor edad tiene ',Min,' años y la de mayor edad tiene ', Max, ' años.');
    
//Adultos mayores (mas de 60 años)

const AdultoMayor = array.filter(AdulM => AdulM >= 60);
document.write('<br>','• Tenemos una cantidad de ',AdultoMayor.length,' adultos mayores de 60 años.');
    
//Promedio edad

let acomulado = 0;
for (let i = 0; i < array.length; i++) {
    acomulado += array[i];
    
}
document.write('<br>','• El promedio de edades es de ',acomulado / array.length, 'años.');


