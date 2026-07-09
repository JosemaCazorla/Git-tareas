/*
1. El Acumulador de "Dinero con Tope" (Ciclo while)
Consigna: Imagina que quieres ahorrar para un objetivo de $1000. El programa debe pedir al usuario que ingrese montos de ahorro diarios (en un prompt o variable) y los vaya sumando. El ciclo while debe ejecutarse mientras la suma total sea menor a $1000. Al llegar o superar el objetivo, imprime "¡Objetivo alcanzado!".

Desafío lógico: ¿Qué pasa si el usuario ingresa un número negativo? Añade una validación para que no sume montos inválidos.

Objetivo: Manejo de acumuladores con condiciones de salida basadas en metas.*/



//declaro valores
let total = 0;
let objetivo = 1000;

//le pide al usuiario que ingrese monto 
while (total < objetivo) {
    let ingreso = Numer(prompt("Ingrese un monto de dinero:"));
//al ingresar numero negativo muestra monto invalido
    if (ingreso < 0){
        console.log("Monto invalido. No se permiten valores negativos.");
    } else {
 //continua sumando hasta alcanzar objetivo o superarlo       
        total += ingreso;
        console.log("Total acumulado: $" + total);
    } 
}
console.log("¡objetivo alcanzado! Se alcanzo un total de $" + total)





/*
2. El "Triángulo de Asteriscos" (Ciclo for anidado)
Consigna: Utiliza dos bucles for (uno dentro de otro) para imprimir un triángulo de asteriscos en la consola con una altura de 5 líneas:

*
**
***
****
*****
Desafío lógico: El bucle externo controla las filas y el interno controla cuántos asteriscos imprimir en cada fila. 

Objetivo: Dominar la complejidad de los bucles anidados, fundamental para entender estructuras de datos complejas en el futuro. 
*/

//declaro mis filas
for (let fila = 1; fila <= 5; fila++) {
    let triangulo = "";

    //declaro mis columnas
    for (let columna = 1; columna <= fila; columna++) {
        triangulo += "*";
    }
    //imprime mi triangulo en ***
    console.log(triangulo);
}




/*
3. El Simulador de "Token de Seguridad" (Ciclo while)
Contexto: Hoy en día, los sistemas de seguridad nos piden ingresar un código que caduca en segundos o nos limita la cantidad de intentos.

Consigna: Crea un programa que simule un sistema de autenticación de 2 pasos. El sistema tiene un código fijo (ej: 5555). El usuario tiene un máximo de 3 intentos para ingresarlo correctamente.

Desafío lógico: Usa un contador que aumente con cada intento fallido y un while que verifique dos condiciones: que el código sea incorrecto y que los intentos sean menores a 3.
*/


//declaro codigo y intentos
let codigoCorrecto = "12345" ;
let codigoIncorrecto = "" ;
let intentos = 0;

//pide al usuario ingresar el codigo
while (codigoIngresado !== codigoCorrecto && intentos < 3) {
    codigoIngresado = prompt("Ingrese el codigo de autenticacion:");
//al ser incorrecoto da otros intentos
    if(codigoIngresado !== codigoCorrecto) {
        intentos++;
        console.log("Codigo incorrecto.");
        console.log("intentos restantes: " + (3 - intentos));
    }
}
//cuando acierta el codigo imprime exito o si no el bloqueo
    if (codigoIngresado === codigoCorrecto) {
        console.log("¡Autenticacion exitosa! Acceso permitido.");
    } else {
        console.log("Acceso bloqueado. Se alcanzo el maximo de intentos.");
    }




/*
4. Gestor de "Horas de Estudio" (Ciclo for)
Contexto: Los estudiantes suelen organizar su semana para cumplir con el curso Fullstack.

Consigna: Crea un programa donde el usuario ingrese cuántas horas dedicará a estudiar cada día de la semana (7 días). El programa debe usar un ciclo for para solicitar el dato 7 veces, ir sumando las horas en un acumulador y, al final, mostrar el promedio de horas diarias dedicadas al estudio.

Desafío lógico: ¿Qué pasa si el usuario ingresa un valor negativo? El programa debe ignorar ese dato y pedir que ingrese un número mayor a 0.
*/



//horas total 0
let totalHoras = 0;
 //ingresar horas 
for (let dia = 1; dia <= 7; dia++) {
    let horas = Number(prompt("Ingrese las horas de estudio del dia " + dia + ":"));
//valor negativo error 
    while (horas < 0) {
        alert("Valor invalido. Ingrese un numero mayor o igual a 0.");
    horas = number(prompt("Ingrese nuevamente las horas de estudio del dia " + dia + ":"));
}
//total de horas
totalHoras += horas;
}
//promedio de horas por dia 
let promedio =totalHoras / 7;

console.log("Total de horas estudiadas: " + totalHoras);
console.log("Promedio diario: " + promedio.toFixed(2) + " horas");




/*
5. Simulador de "Carrito de Descuentos Progresivos" (Ciclo while)
Contexto: Muchas tiendas online aplican descuentos que dependen de la cantidad de productos en el carrito.

Consigna: El usuario comienza con un producto. El programa debe preguntar el precio de cada producto y sumarlo. El ciclo while continuará pidiendo productos mientras el usuario escriba "si" para agregar otro. Si el total supera los $5000, el sistema debe imprimir: "¡Has obtenido un 10% de descuento!".

Desafío lógico: Debes llevar un control del total acumulado en cada iteración y aplicar el descuento solo una vez al final, antes de imprimir el resultado.
*/ 

//declaro bariables 
let total = 0;
let continuar = "si";

//ingresar precio de producto
while (continuar.toLowerCase() === "si") {
    let precio = Number(prompt("Ingrese el precio del producto:"));

    if (precio >= 0) {
        total += precio;
        console.log("Total acumulado: $" + total);
    } else {
        console.log("Precio invalido.");
    }
//pregunta si desea continuar comprando

    continuar = prompt("Desea agregar otro producto? (si/no)");
}

//para aplicar descuento solo al finalizar

if (total > 5000) {
    console.log("Has obtenido un descuento de 10%");
    total = total * 0.90;
}

//muestra precio total con descuento
console.log("total a pagar: $" + total.toFixed(2));