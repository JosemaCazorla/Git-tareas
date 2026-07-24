const brand = document.querySelector(".navbar-brand");
brand.textContent = "Document Object Model";
brand.classList.add("fw-bold", "fs-3");

const opcionesDeMenu = ["Inicio", "Documentación", "Precio"];

const nodosItem = document.querySelectorAll(".nav-link");

nodosItem.forEach((item, index) => {
  item.textContent = opcionesDeMenu[index];
});

const textoCard1 = document.querySelector("#card-text-1");
textoCard1.innerText =
  "Representan etiquetas HTML.\nTienen propiedades y pueden contener otros nodos.";

const textoCard2 = document.querySelector("#card-text-2");
textoCard2.innerText =
  "Representan el texto puro dentro del documento. Nota crucial: ¡Incluso los espacios enblanco y saltos de línea entre etiquetas de HTML generan nodos de texto!";

const textoCard3 = document.querySelector("#card-text-3");

function cambiarTexto(nodo) {
  const textoNuevo = prompt("Ingresá el nuevo texto");
  if (textoNuevo) {
    nodo.innerText = textoNuevo.trim();
  }
}

//---Modo oscuro----

const checkMode = document.querySelector("#switchCheckChecked");

checkMode.addEventListener("change", () => {
  if (checkMode.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});

//crear cuerpo de tabla
const selectoresDOM = [
  {
    selector: "getElementById",
    sintaxis: "document.getElementById('id')",
    devuelve:
      "Un único objeto elemento cuya propiedad 'id' coincida, o null si no hay coincidencias.",
  },
  {
    selector: "getElementsByClassName",
    sintaxis: "document.getElementsByClassName('clase')",
    devuelve:
      "Una HTMLCollection (viva) con todos los elementos que tienen esa clase.",
  },
  {
    selector: "getElementsByTagName",
    sintaxis: "document.getElementsByTagName('etiqueta')",
    devuelve:
      "Una HTMLCollection (viva) con todos los elementos de esa etiqueta (ej. 'p' o 'img')].",
  },
  {
    selector: "querySelector",
    sintaxis: "document.querySelector('selector_css')",
    devuelve:
      "El primer elemento que coincida con el selector CSS o null si no encuentra nada.",
  },
  {
    selector: "querySelectorAll",
    sintaxis: "document.querySelectorAll('selector_css')",
    devuelve:
      "Una NodeList estática con todos los elementos que coinciden con el selector CSS.",
  },
];

const bodyTable = document.querySelector("#body-table");

selectoresDOM.forEach((item) => {
  //crear la fila
  const fila = document.createElement("tr");
  const celda = `<td>${item.selector}</td><td>${item.sintaxis}</td><td>${item.devuelve}</td>`;
  fila.innerHTML = celda;
  bodyTable.append(fila);
});

document.querySelector("#dangerBtn").addEventListener("click", () => {
  document.querySelector("#dangerBtn").innerText = "Mostrar tabla";
  document.querySelector("#dangerBtn").classList.remove("btn-danger");
  document.querySelector("#dangerBtn").classList.add("btn-success");
  document.querySelector("table").remove();
});
