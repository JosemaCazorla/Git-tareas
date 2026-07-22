/*Ejercicio 1: El Transformador de Datos (map)
Tienes una lista de temperaturas en grados Celsius. Crea una función llamada convertirAFahrenheit que reciba este array y devuelva un nuevo array con las temperaturas convertidas a Fahrenheit.

Fórmula: (celsius * 9/5) + 32
Array inicial: [0, 10, 20, 30, 40]*/


//se crea el array
const temperaturas = [0, 10, 20, 30, 40];
//funcion flecha con la formula...  usando el map para que recorra cada temperatura
function convertirAFahrenheit(array) {
    return array.map(celsius => (celsius * 9 / 5) + 32);
}

const temperaturasFahrenheit = convertirAFahrenheit(temperaturas);

console.log(temperaturasFahrenheit);



/*Ejercicio 2: El Filtro de Seguridad (filter)
Tienes un array de números que representan edades de personas. Crea una función llamada obtenerMayoresDeEdad que use .filter() para devolver un array solo con las edades que sean 18 o más.

Array inicial: [12, 18, 25, 10, 30, 15]*/

//definimos valores de array de las edades
const edades = [12, 18, 25, 10, 30, 15];
//en la funcion se utiliza el filter para que devuelva los mayores de edad
function obtenerMayoresDeEdad(array) {
    return array.filter(edad => edad >= 18);
}

const mayores = obtenerMayoresDeEdad(edades);

console.log(mayores);



/*Ejercicio 3: El Buscador de Códigos (find)
Tienes un array de strings que representan códigos de productos. Crea una función llamada buscarProducto que reciba el array y un código específico. La función debe usar .find() para retornar el código si existe, o "No encontrado" si no está.

Array inicial: ["A10", "B20", "C30", "D40"]*/

//defino mi array
const productos = ["A10", "B20", "C30", "D40"];
//le decimos que busque un codigo, que cumpla la funcion 
function buscarProducto(array, codigo) {
    const producto = array.find(item => item === codigo);
// si el producto no se encontro devuelve
    return producto ? producto : "No encontrado";
}

console.log(buscarProducto(productos, "C30"));
console.log(buscarProducto(productos, "Z50"));




/*Ejercicio 4: El Acumulador Maestro (reduce)
Tienes un array de números que representan las ventas del día. Crea una función llamada calcularTotalVentas que use .reduce() para sumar todas las ventas y devolver el total.

Array inicial: [100, 250, 50, 300, 120]*/

//definimos nuestro array
const ventas = [100, 250, 50, 300, 120];
//hacemos el arreglo a la funcion y utilizamos el reduce con un acumulador mas nuestra venta
function calcularTotalVentas(array) {
    return array.reduce((acumulador, venta) => acumulador + venta, 0);
}

const total = calcularTotalVentas(ventas);
//muestra el total del valor
console.log(total);




/*Consejos para alumnos:
Ejercicio 5 y 6:  Cuando trabajan con objetos, el callback de los métodos (como estudiante => estudiante.nota) es la llave maestra para acceder a la información.

El orden importa: En el ejercicio 6  .filter() primero "limpia" la lista y luego .map() "transforma" lo que quedó.*/


/*Ejercicio 5: Gestión de Objetos (El "Inventario Simple")
Crea un array llamado inventario que contenga 3 objetos. Cada objeto debe representar un producto con las propiedades: nombre (string) y precio (number).
Crea una función llamada listarPrecios que recorra el array y retorne un nuevo array solo con los precios usando .map().
Tip: Accede a la propiedad mediante producto.precio.*/

//definimos nuestro array con nombres y montos 

const inventario = [
    {
        nombre: "Teclado",
        precio: 25000
    },
    {
        nombre: "Mouse",
        precio: 15000
    },
    {
        nombre: "Monitor",
        precio: 180000
    }
];
//utilizando un map para crear un nuevo array con esos precios de cada producto
function listarPrecios(array) {
    return array.map(producto => producto.precio);
}

const precios = listarPrecios(inventario);
//imprime los precios
console.log(precios);




/*Ejercicio 6: El Desafío Combinado (Integración)
Tienes un array de objetos llamado estudiantes donde cada uno tiene nombre y nota.

Usa .filter() para obtener solo los estudiantes que aprobaron (nota >= 6).

A esos estudiantes aprobados, usa .map() para obtener solo sus nombres en un nuevo array.

Imprime el resultado final.

const estudiantes = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Beto", nota: 4 },
  { nombre: "Carla", nota: 10 },
  { nombre: "David", nota: 5 }
];
*/

//definimos nuestro array 
const estudiantes = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Beto", nota: 4 },
  { nombre: "Carla", nota: 10 },
  { nombre: "David", nota: 5 }
];
//primero usamos filter para los estudiantes aprobados leyendo la propiedad nota
//despues el map para mostrar el nombre en un nueo array leyendo la propiedad nombre
const aprobados = estudiantes
  .filter(estudiante => estudiante.nota >= 6)
  .map(estudiante => estudiante.nombre);
//imprime los resultados 
console.log(aprobados);

