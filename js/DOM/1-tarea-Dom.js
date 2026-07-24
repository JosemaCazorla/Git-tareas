/*Vamos a crear una "Mini App de Tareas" (To-Do List). Es el escenario perfecto para practicar el DOM, porque requiere crear elementos, interactuar con el usuario y modificar estilos dinámicamente.

Aquí tienes el template y los desafíos.

1. Template HTML (Bootstrap 5)
Este es el esqueleto base que deben usar. Ya tiene el CDN de Bootstrap incluido.
2. Desafíos Prácticos (Tareas para los alumnos)



/*Tarea 1: Captura y Eventos
Enunciado: Selecciona el botón #btnAgregar y el input #inputTarea. Agrega un addEventListener de tipo 'click' al botón.
Tip: Cuando el usuario haga clic, haz un console.log del inputTarea.value para verificar que estás capturando lo que el usuario escribe.*/




/*Tarea 2: Creación Dinámica con Template String
Enunciado: Dentro del evento click, crea un nuevo elemento <li> usando document.createElement('li'). Usa innerHTML y un template string para insertar el texto del input dentro de una estructura de Bootstrap: <li class="list-group-item d-flex justify-content-between">${texto} <button class="btn btn-danger btn-sm">X</button></li>.
Tip: No olvides usar .append() para insertar el nuevo li dentro del ul #listaTareas.*/





/*Tarea 3: Limpieza de Interfaz
Enunciado: Después de agregar la tarea, el input debe quedar vacío y el cursor debe volver a parpadear en él.
Tip: Asigna un string vacío "" al value del input y usa el método .focus() sobre el mismo elemento.*/





/*Tarea 4: El Botón de Borrar (Delegación de eventos o lógica simple)
Enunciado: Haz que el botón de "X" que creaste dinámicamente realmente elimine la tarea de la lista.
Tip: En el mismo evento donde creas el li, agrega un addEventListener al botón de borrar que acabas de crear para ejecutar nodo.remove().*/






/*Tarea 5: Validación de datos
Enunciado: Evita que el usuario agregue tareas vacías.
Tip: Usa un if para comprobar si inputTarea.value.trim() !== "" antes de ejecutar la lógica de creación. Si está vacío, podrías usar alert() para avisar al usuario.*/






/*Tarea 6: Estilos Dinámicos (Modo "Prioridad")
Enunciado: Agrega un segundo botón llamado "Prioridad". Al hacer clic en una tarea, esta debe cambiar su color de fondo (usando .classList.add('bg-warning')).
Tip: Puedes alternar clases usando classList.toggle('bg-warning') dentro de un evento click sobre cada li generado.*/


