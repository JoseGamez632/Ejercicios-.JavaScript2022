
/////////////////////////////////////////////////////////////////////////////////////////////////////////////// EJERCISIO 1A
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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////EJERCISIO 1B

/* var a, b, resultadoP, resultadoA;
const NUM=2;

a = parseInt(prompt('Lado A:'));
b = parseInt(prompt('Lado B:'));

resultadoP = NUM*(b+a);
resultadoA = b*a;

document.write (resultadoP,' Perimetro y ', resultadoA, ' Area.'); */


////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////EJERCISIO 1C

/* var a = parseInt(prompt('Lado A:')), resultadoP, resultadoA;
const NUM = 4;

resultadoP = NUM * a;
resultadoA = a * a;

document.write (resultadoP,' Perimetro y ', resultadoA, ' Area.'); */

/////////////////////////////////////////////////////////////////////////////////


//EJERCISIO 1D

var r, resultadoP, resultadoA;
const PI=3.1416, NUM=2;

r = parseInt(prompt('Lado R:'));

resultadoP = PI * (NUM*r);
resultadoA = PI * r *r;

document.write (resultadoP,' Perimetro y ', resultadoA, ' Area.');

/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////EJERCISIO 2

/* function NumAleatorio(min, max) {
    return Math.floor(Math.random()*(max - min)) + min;
} */

/* let array = [];
//llenar array
for (let i = 0; i <= 9; i++) {
    array.push(NumAleatorio(1, 100));
}
document.write(array);  */

/* let array = [];

for (let i = 0; i <= 9; i++) {
    array[i] = parseInt(prompt('Digita las edades de 10 personas entre los 1 y 120 a??os.'));
}

document.write(array); 

//Menores de edad
const MenorEdad = array.filter(Xnum => Xnum <= 18);
document.write("<br>",' ??? Tenemos ', MenorEdad.length, ' menores de edad de ',MenorEdad, ' a??os.')

//Mayores de edad

const MayorEdad = array.filter(Xnum => Xnum >= 18);
document.write("<br>",'??? Tenemos ', MayorEdad.length, ' mayores de edad de ',MayorEdad, ' a??os.')

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

    document.write('<br>','??? La persona con menor edad tiene ',Min,' a??os y la de mayor edad tiene ', Max, ' a??os.');
    
//Adultos mayores (mas de 60 a??os)

const AdultoMayor = array.filter(AdulM => AdulM >= 60);
document.write('<br>','??? Tenemos una cantidad de ',AdultoMayor.length,' adultos mayores de 60 a??os.');
    
//Promedio edad

let acomulado = 0;
for (let i = 0; i < array.length; i++) {
    acomulado += array[i];
    
}
document.write('<br>','??? El promedio de edades es de ',acomulado / array.length, 'a??os.');  */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////EJERCISIO 3

/* function NumAleatorio(min, max) {
    return Math.floor(Math.random()*(max - min)) + min;
}
let array1 = []; 
let array2 = [];

for (let i = 0; i < 5; i++) {
    array1.push(NumAleatorio(1,50));
    array2.push(NumAleatorio(1,50));
} 
document.write('??? Array 1 ingresado: ',array1,'<br>','??? Array 2 ingresado: ',array2,'<br>');

let ArrayCombinado = [array1,array2];

array1.sort(COMPARAR);
array2.sort(COMPARAR);
ArrayCombinado.sort(COMPARAR);

function COMPARAR(a,b) {
    return a-b
}

document.write("<br>", '??? El Array 1 ordenado es el siguiente: ', array1, '<br>', '??? El Array 2 ordenado es el siguiente: ', 
array2,'<br>', '??? La convinaci??n de los 2 Arrays ordenados es el siguiente ',ArrayCombinado); */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////EJERCISIO 4


/* function NumAleatorio(min, max) {
    return Math.floor(Math.random()*(max - min)) + min;
}


let arrayEmisora = [];

for (let i = 0; i < 6; i++) {
    arrayEmisora.push({nombre: prompt('Digita tu nombre'), cedula: prompt('Digita tu cedula sin puntos'), fechaNacimiento: prompt('Digita tu fecha de nacimiento "dd/mm/aaaa"'), 
    correo: prompt('Digita tu correo electronico'), ciudadResidencia: prompt('Donde vives actualmente'), ciudadOrigen: prompt('Donde nacio'), 
    artistaFavorito: prompt('Digita tu artista favorito'), 
    cancionesFav1: prompt('Digita tu cancion favorito #1'), cancionesFav2: prompt('Digita tu cancion favorito #2'), cancionesFav3: prompt('Digita tu cancion favorito #3')});
    
}

for (let i = 0; i < 6; i++) {
    document.write('Puesto #',i,' ',JSON.stringify(arrayEmisora[i]),'<br>');
    
} 

 let ganador = NumAleatorio(0,5)

document.write('<br>','EL GANADOR ES EL CONCURSANTE CON EL PUESTO #',ganador,'<br>',JSON.stringify(arrayEmisora[ganador]));  */

///////////////////////////prueba

/* let ArrarP = [
    {nombre: 'camilo', edad: 20 },
    {nombre: 'juan', edad: 54 },
    {nombre: 'pedro', edad: 35 },
    {nombre: 'sebas', edad: 12 },
]

document.write(JSON.stringify(ArrarP[2],))


let todasPersonas = ArrarP.map(
    (ArrarP) => ArrarP.nombre + ' con una edad de ' + ArrarP.edad + ' anos.'
);

alert(todasPersonas.join(' - ')); */