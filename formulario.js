// Este código imprime en la etiqueta H2 una lista de invitados que se crea en el formulario, mediante la función agregarInvitado.
//  Además, muestra en la consola los datos de cada invitado (aunque no passen el filtro) y crea un botón por cada elemento para poderlo eliminar


var formulario = document.querySelector(".formulario");
//Se cambia el texto en paréntesis para llamar el elemento por la class en lugar de la etiqueta y se añade ; en todas las líneas

formulario.onsubmit = function(event) {

  event.preventDefault();//se completa la sentencia que estaba como e.prevent()
  
  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = e.value;
  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;

  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

if (nombre.length > 0  && edad > 18 && edad < 120 ) {//se quitaron unos paréntesis extras
  agregarInvitado(nombre, edad, nacionalidad);
  }
}
// Se quita ese botón porque no es necesario:

// var botonBorrar = document.createElement("button")
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"
// var corteLinea = document.createElement("br")
// document.body.appendChild(corteLinea);
// document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

var lista = document.getElementById("lista-de-invitados");

var elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista");//se cambia el método por add
lista.appendChild(elementoLista);

var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = "Nombre: ";
inputNombre.value = nombre;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);


var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove();
  }
}