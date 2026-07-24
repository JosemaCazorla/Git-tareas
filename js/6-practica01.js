
/* Ejercicios de Lógica y Algoritmos*/


/* 1. El Buscador de Valores Únicos (for)

Tienes un array con números repetidos. Crea un nuevo array llamado `unicos` que contenga cada número del original, pero **sin repeticiones**.

```javascript
const numeros = [1, 2, 2, 3, 4, 4, 5, 1, 6];*/

//defino mi array 
const numeros  = [1, 2, 2, 3, 4, 4, 5, 1, 6];
const unicos = [];
//aplicando for le digo que solo me entregue los numeros sin repetir
for (let i = 0; i < numeros.length; i++) {
    if(!unicos.includes(numeros[i])){
        unicos.push(numeros[i]);
    }
}
console.log(unicos);

/* 2. El Separador de Tipos (for)

Tienes un array mixto. Recorre el array y separa los elementos en dos arrays distintos: `soloNumeros` y `soloStrings`.

```javascript
const mixto = ["Hola", 10, "Mundo", 25, 40, "Javascript", true];
```*/

//defino mi array
const mixto = ["Hola", 10, "Mundo", 25, 40, "Javascript", true];
const soloNumeros = [];
const soloStrings 

//aplicando for le ordeno que separe los numeros de las strings
for (let i = 0; i < mixto.length; i++) {
    if (typeof mixto[i] === "number") {
        soloNumeros.push(mixto[i]);
    } else if (typeof mixto[i] === "string") {
        soloStrings.push(mixto[i]);
    }
}
console.log("Numeros",soloNumeros);          //imprimo solo numeros
console.log("Strings", soloStrings);         //imprimo solo strings




/* 3. El Transformador de Textos (for)

Dado un array de palabras, crea un nuevo array donde todas las palabras tengan su primera letra en mayúscula y el resto en minúscula.

```javascript
const palabras = ["jAvAsCrIpT", "pRoGrAmAcIoN", "eJeRcIcIo"];
```*/


//se crea los arrays
const palabras = ["jAvAsCrIpT", "pRoGrAmAcIoN", "eJeRcIcIo"];
const palabrasCorregidas = [];

//utilizo for para corregir las palabras primero a mayusculas luego a minusculas
//usa el charAt(0).toUpperCase() para que la primer letra sea mayuscula
// luego slice(1).toLowerCase para que las palabras se hagan minusculas 
//por ultimo el signo + une ambas partes

for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];

    let nuevaPalabra=
    palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase;  
    palabrasCorregidas.push(nuevaPalabra);
}
console.log(palabrasCorregidas);


/* 4. Análisis de Temperaturas (for)

Dado un array que representa las temperaturas de la semana, encuentra la **temperatura máxima** y la **temperatura mínima**.

```javascript
const temperaturas = [18, 22, 15, 28, 12, 25, 19];
```*/


//defino mis arrays
const temperaturas = [18, 22, 15, 28, 12, 25, 19];
let temperaturaMaximas = temperaturas[0];
let temperaturaMinima = temperaturas[0];

// utilizando for vamos a separar la maxima y la minima temperatura
for(let i = 1; i <temperaturas.length; i++) { 
    if(temperaturas[i] > temperaturaMaximas){
        temperaturaMaximas = temperatura[i];
    }
    if(temperatura[i] < temperaturaMinima){
        temperaturaMinima = temperaturas[i];
    }
}
console.log("temperatura maxima:",temperaturaMaximas);    //imprimo maxima
console.lo("temperatura minima:",temperaturaMinima);      //imprimo minima


/* 5. El Codificador Simple (for)

Crea un programa que recorra un array de números y genere un nuevo array donde cada número sea multiplicado por sí mismo (el cuadrado), pero **solo si es un número par**. Si es impar, el valor debe permanecer igual.

```javascript
const datos = [1, 2, 3, 4, 5, 6, 7, 8];
```*/

//defino arrays
const datos = [1, 2, 3, 4, 5, 6, 7, 8];
const resultado = [];

//con for le decimos que a los par los mutiplique por su doble y a los impar quedan igual

for(let i = 0; i < datos.length; i++) {
    if (datos[i] % 2 === 0) {                     //determina si es par con el resto
        resultado.push(datos[i] * datos[i]);      //duplica el valor de par
    } else {
        resultado.push(datos[i]);                 //si esimpar queda igual
    }
}
console.log(resultado);                          //imprime resultado






/* 6. El Buscador de "La Frase Secreta" (while)

Tienes un array de strings. Debes recorrerlo y detenerte apenas encuentres la palabra "objetivo". Cuando la encuentres, imprime su índice y rompe el ciclo inmediatamente.

```javascript
const palabras = ["manzana", "perro", "objetivo", "casa", "sol"];
```*/

//defino array
const palabras = ["manzana", "perro", "objetivo", "casa", "sol"];
let i = 0;

//utilizando el while busco el lugar de la palabra objetivo 

while (i < palabras.length) {
    if (palabras[i] === "objetivo") {
        console.log("La palabra objetivo se encontro en el indice:", i);
    break;
    }
 
i++
}


/* 7. La Batería del Robot (while)

Imagina que un robot tiene una batería inicial de 100%. Cada tarea que realiza consume una cantidad aleatoria de energía (entre 5 y 20).

- **Reto:** Cuenta cuántas tareas logró realizar antes de apagarse.

```javascript
let bateria = 100;
```*/

//defino mis arrays
let bateria = 100;
let tareas = 0;

while(baterias > 0){
    let consumo = Math.floor(Math.random()*16) + 5;

bateria = bateria - consumo;
tareas++;

console.log(
    `tareas ${tareas}: consumio ${consumo}% - bateria restante: ${bateria}`);
}

console.log(`El robot realizó ${tareas} tareas antes de apagarse.`);




/* 8. La Calculadora de Conversión (function)

Crea una función llamada `convertirAMinutos` que reciba un número de horas y retorne la cantidad equivalente en minutos.

- **Reto:** Invoca la función con diferentes valores y muestra el resultado en consola.
- **Pista:** `minutos = horas * 60`.
*/

//defino la funcion 
 function convertirAMinutos(horas){
    return horas * 60;
 }

 //invocando la funcion 
console.log(convertirAMinutos(1));
console.log(convertirAMinutos(2));
console.log(convertirAMinutos(5));
console.log(convertirAMinutos(10));





/* 9. El Comparador de Edad (function)

Crea una función llamada `puedeVotar` que reciba una edad (número) y retorne `true` si la persona tiene 18 años o más, y `false` en caso contrario.*/

//defino la funtion 
function puedeVotar(edad) {
    return edad >= 18;
}

console.log(puedeVotar(20));
console.log(puedeVotar(18));
console.log(puedeVotar(16));





/* 10. El Calculador de Descuentos (function)

Crea una función llamada `calcularPrecioFinal` que reciba dos parámetros: `precioOriginal` y `porcentajeDescuento`. La función debe retornar el precio final después de aplicar el descuento.
*/

//defino function

function calcularPrecioFinal(precioOriginal, porcentajeDescuento) {
    let descuento = (precioOriginal * orcentajeDescuento) / 100;
    precioFinal = precioOriginal - descuento;

    return precioFinal;
}

console.log(calcularPrecioFinal(1000, 20));
console.log(calcularPrecioFinal(500, 10));
console.log(calcularPrecioFinal(2500, 15));


