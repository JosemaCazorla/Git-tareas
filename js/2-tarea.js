/*Trabajemos con String
Se necesita un script que solicite al usuario escribir una frase o texto y luego ingresar una palabra que quiera buscar. En cualquier caso (sea que encuentre la palabra o no) el programa debe devolver un mensaje informando el resultado (Usar emojis también).

Usar los métodos aprendidos en la clase para encontrar la solución.*/


//se le solicita al usuario una frase o texto.
let frase = prompt ("Ingrese texto o una frase. ✍️");

//ingrese palabra para buscar
let palabra = prompt("Ingrese una palabra.🔎");

//convertir ambos textos a minuscula 
let = fraseMinuscula = frase.toLowerCase();
let = palabraMinuscula = palabra.toLowerCase();

//buscar la palabra
if(palabraMinuscula.includes(palabraMinuscula)){
    console.log(`✅ La palabra "${palabra}" fue encontrada en el texto.🎉`);
} else {
console.log(`❌ La palabra "${palabra}" no se encontro en el texto.`);
}


/* Usando Math
Crear un script que simule el juego de Adivina el número. Primero se genera un número aleatorio entre 1 y 10 que el usuario no debe saber, Luego el usuario ingresa un número entre 1 y 10 tratando de adivinar. Devolver un mensaje si ganó o perdió.*/

//generar un numero aleatorio entre 1 y 10
let numeroSecreto = Math.floor(Math.random()*10) + 1;

//solicitar el numero al usuario
let numeroUsuario = Number(prompt("Adivina el número (del 1 al 10):"));

//compara los numeros
if (numeroUsuario === numeroSecreto){
    console.log("Felicitaciones lo adivinaste!  🥳");
} else {
    console.log(`Perdiste no acertaste, el numero era: ❌ ${numeroSecreto}.`);
}





/* Juguemos con Switch
En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua.
Si no elige el menú de la lista aparecerá la frase elija carne, pescado o verdura.*/


//solicitar el tipo de menu
let menu = prompt ("Elija un menu: Carne, Verdura o Pescado").toLowerCase();

//evaluar la opcion ingresada y devolver la bebida que acompañara
switch (menu) {
    case "carne":
        console.log("Has elegido Carne su bebida sera Vino Tinto. 🍷");
        break;
    
    case "verdura":
        console.log("Has elegido Verduras su bebida sera Agua. 💧");
        break;

    case "pescado":
        console.log("Has elegido Pescado su bebida sera Vino Blanco. 🥂"); 
        break;

    default:
        console.log("❌ La opcion no es valida por favor elija entre Carne, Verdura o Pescado.");

}