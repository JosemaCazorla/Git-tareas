/*Ejercicio 1: El Transformador de Datos (map)
Tienes una lista de temperaturas en grados Celsius. Crea una función llamada convertirAFahrenheit que reciba este array y devuelva un nuevo array con las temperaturas convertidas a Fahrenheit.

Fórmula: (celsius * 9/5) + 32

Array inicial: [0, 10, 20, 30, 40]*/





/*Ejercicio 2: El Filtro de Seguridad (filter)
Tienes un array de números que representan edades de personas. Crea una función llamada obtenerMayoresDeEdad que use .filter() para devolver un array solo con las edades que sean 18 o más.

Array inicial: [12, 18, 25, 10, 30, 15]*/






/*Ejercicio 3: El Buscador de Códigos (find)
Tienes un array de strings que representan códigos de productos. Crea una función llamada buscarProducto que reciba el array y un código específico. La función debe usar .find() para retornar el código si existe, o "No encontrado" si no está.

Array inicial: ["A10", "B20", "C30", "D40"]*/






/*Ejercicio 4: El Acumulador Maestro (reduce)
Tienes un array de números que representan las ventas del día. Crea una función llamada calcularTotalVentas que use .reduce() para sumar todas las ventas y devolver el total.

Array inicial: [100, 250, 50, 300, 120]*/







/*Consejos para alumnos:
Ejercicio 5 y 6:  Cuando trabajan con objetos, el callback de los métodos (como estudiante => estudiante.nota) es la llave maestra para acceder a la información.

El orden importa: En el ejercicio 6  .filter() primero "limpia" la lista y luego .map() "transforma" lo que quedó.*/


/*Ejercicio 5: Gestión de Objetos (El "Inventario Simple")
Crea un array llamado inventario que contenga 3 objetos. Cada objeto debe representar un producto con las propiedades: nombre (string) y precio (number).

Crea una función llamada listarPrecios que recorra el array y retorne un nuevo array solo con los precios usando .map().

Tip: Accede a la propiedad mediante producto.precio.*/







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



