

/*📌 Pautas importantes
Usar prompt para pedir datos al usuario.  
Convertir entradas con parseInt o parseFloat según corresponda.  
Aplicar operadores aritméticos y de comparación para resolver los cálculos.  
Utilizar if y else para tomar decisiones según los valores ingresados.  
Mostrar resultados con console.log en lugar de alertas o mensajes en pantalla.  
Probar distintos valores para verificar que el programa funciona en diferentes casos.
*/



/* 📝 Ejercicio 1: Comparar números enteros
Solicita al usuario dos números enteros.  
Convierte las entradas a números enteros.  
Determina cuál de los dos números es mayor, o si son iguales.  
Muestra el resultado en la consola.*/


// Solicitar dos números al usuario
let num1 = parseInt(prompt("Ingrese el primer número entero:"));
let num2 = parseInt(prompt("Ingrese el segundo número entero:"));

// Comparar los números
if (num1 > num2) {
    console.log("El número mayor es: " + num1);
} else if (num2 > num1) {
    console.log("El número mayor es: " + num2);
} else {
    console.log("Los dos números son iguales.");
}


//prompt() solicita al usuario que ingrese un valor.
//parseInt() convierte el texto ingresado en un número entero.
//if (num1 > num2) verifica si el primer número es mayor.
//else if (num2 > num1) verifica si el segundo número es mayor.
//else se ejecuta cuando ambos números son iguales.
//console.log() muestra el resultado en la consola.



/*📝 Ejercicio 2: Calcular promedio de notas
Pide al usuario tres notas con decimales.  
Convierte las entradas a números decimales.
Calcula el promedio de las tres notas usando operadores aritméticos.  
Muestra el promedio en la consola.  
Usa un condicional para indicar si el promedio es suficiente para aprobar (ejemplo: mayor o igual a 6).*/


// Solicitar tres notas al usuario
let notaUno = parseFloat(prompt("Ingrese la primera nota:"));
let notaDos = parseFloat(prompt("Ingrese la segunda nota:"));
let notaTres = parseFloat(prompt("Ingrese la tercera nota:"));

// Calcular el promedio
let promedio = (notaUno + notaDos + notaTres) / 3;

// Mostrar el promedio en consola
console.log("El promedio es: " + promedio);

// Evaluar si aprueba o no
if (promedio >= 6) {
    console.log("El estudiante está aprobado.");
} else {
    console.log("El estudiante está desaprobado.");
}

//parseFloat() convierte a número decimal.
//Se suman las tres notas y se dividen por 3.
//Se usa if para verificar si el promedio es ≥ 6.
//Se muestra todo en consola.




/*📝 Ejercicio 3: Calculadora básica
Solicita al usuario dos números decimales.  
Convierte las entradas. 
Pide al usuario que ingrese el tipo de operación: suma, resta, multiplicación o división.  
Usa condicionales para ejecutar la operación correspondiente.  
Muestra el resultado en la consola.  
Si la operación no es válida, informa al usuario con un mensaje en la consola.*/


// Solicitar dos números decimales
let primerNumero = parseFloat(prompt("Ingrese el primer número:"));
let segundoNumero = parseFloat(prompt("Ingrese el segundo número:"));

// Solicitar operación
let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division):");

// Variable para el resultado
let resultado;

// Condicionales para cada operación
if (operacion === "suma") {
    resultado = primerNumero + segundoNumero;
    console.log("Resultado de la suma: " + resultado);

} else if (operacion === "resta") {
    resultado = primerNumero - segundoNumero;
    console.log("Resultado de la resta: " + resultado);

} else if (operacion === "multiplicacion") {
    resultado = primerNumero * segundoNumero;
    console.log("Resultado de la multiplicación: " + resultado);

} else if (operacion === "division") {
    if (segundoNumero !== 0) {
        resultado = primerNumero / segundoNumero;
        console.log("Resultado de la división: " + resultado);
    } else {
        console.log("Error: no se puede dividir por cero.");
    }

} else {
    console.log("Operación no válida.");
}

//Usa parseFloat() para decimales.
//Pide operación al usuario.
//Usa if / else if / else para decidir qué cálculo hacer.
//Valida división por cero.
//Informa si la operación no existe.
