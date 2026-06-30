
/* 💡 Recomendaciones
✅ Utiliza nombres de variables descriptivos (contador, numero, suma) en lugar de nombres poco claros como x, a o n.

✅ Agrega mensajes claros para el usuario utilizando console.log() o prompt().

✅ Usa emojis para hacer los mensajes más amigables y fáciles de interpretar.

✅ Antes de ejecutar el programa, intenta predecir cuántas veces se repetirá el ciclo y qué valores tomará la variable de control.

✅ Agrega comentarios breves cuando consideres que ayudan a explicar una parte importante de tu solución.

❌ Evita copiar soluciones de internet sin comprender cómo funciona el ciclo.

❌ Evita usar variables que nunca se utilizan.

❌ No modifiques la variable de control de manera innecesaria dentro del ciclo.
*/





/*Ejercicios con for
Mostrar números del 1 al 10. 
Crea un programa que muestre por consola los números del 1 al 10 utilizando un ciclo for. Salida esperada:

1
2
3
4
5
6
7
8
9
10
*/

// muestra numeros 1 al 10 
for (let i = 1; i <= 10; i++) {
    console.log(i);
}




/* 2. Tabla de multiplicar de un número. 
Solicita al usuario un número y muestra su tabla de multiplicar del 1 al 10 utilizando un ciclo for. Ejemplo:

Ingrese un número: 5
Salida esperada:

5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
...
5 x 10 = 50
*/

//solicita  al usuario el numero que desea saber su tabla
let numero = Number(prompt("Ingrese un número:"));

//muestra su tabla de multiplicar desde 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}



/*3. Suma de los primeros 10 números 
Utiliza un ciclo for para sumar los números del 1 al 10 y mostrar el resultado final.
*/


// se crea variable suma y inicia en 0
let suma = 0;

//operacion para que en cada vuelta incremente su valor
for (let i = 1; i <= 10; i++) {
    suma = suma + i;
}

//muestra el resultado final
console.log("La suma total es: " + suma);








/* Ejercicios con while
1. Contador del 1 al 10
Crea un programa que muestre por consola los números del 1 al 10 utilizando un ciclo while.

Salida esperada:

1
2
3
4
5
6
7
8
9
10
*/

//se define y inicia  i = 1
let i = 1;

//verifica que i sea menor o igual a 10 y muestra el valor actual en la consola
while (i <= 10) {
    console.log(i);
    i++;
}






/*2. Cuenta regresiva
Utiliza un ciclo while para mostrar una cuenta regresiva desde 10 hasta 1.

Salida esperada:

10
9
8
7
6
5
4
3
2
1
¡Despegue! 🚀
*/


//con let creamos la variable = 10
let contador = 10;

//se ejecutara mientras sea mayor o igual que 1
while (contador >= 1) {
    console.log(contador);
    contador--;
}
//mostrara el contador en la consola mientras disminuye su valor 

//muestra el despegue una vez terminados los ciclos
console.log("¡Despegue! 🚀");






/* 3. Mostrar números pares hasta 20
Utiliza un ciclo while para mostrar todos los números pares entre 2 y 20.

Salida esperada:

2
4
6
8
10
12
14
16
18
20
*/



//se crea la variable = 2
let numero = 2;

//este se ejecutara mientras sea menor o igual a 20
while (numero <= 20) {
    console.log(numero);
    numero += 2;
}
//incrementara sus valores de a 2 para que sea par



