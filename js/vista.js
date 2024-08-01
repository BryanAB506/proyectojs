const tareas = document.getElementById("tareas");
const agregar1 = document.getElementById("agregar1");
const guardarTareas1 = document.getElementById("guardarTareas1");
const fechas = document.getElementById("fechas");

// Función para guardar las tareas en el almacenamiento local
function guardarTareas() {
    const tareasList = [];
    // Recorre todos los elementos <p> dentro del contenedor de tareas
    guardarTareas1.querySelectorAll("p").forEach((p, index) => {
        // Si el índice es par, se considera una tarea
        if (index % 2 === 0) {
            // Añade un objeto tarea con su descripción y prioridad al array
            tareasList.push({ tarea: p.innerHTML, prioridad: guardarTareas1.querySelectorAll("p")[index + 1].innerHTML });
        }
    });
    // Guarda el array de tareas en el almacenamiento local en formato JSON
    localStorage.setItem("tareas", JSON.stringify(tareasList));
}

// Función para cargar las tareas desde el almacenamiento local al DOM
function cargarTareas() {
    const tareasList = JSON.parse(localStorage.getItem("tareas")) || [];
    tareasList.forEach(t => {
        // Crea un nuevo elemento <p> para la tarea y su prioridad
        let tareasp = document.createElement("p");
        tareasp.innerHTML = t.tarea;
        tareasp.id = "parrafo";
        guardarTareas1.appendChild(tareasp);

        let fechasp = document.createElement("p");
        fechasp.innerHTML = t.prioridad;
        fechasp.id = "parrafo";
        guardarTareas1.appendChild(fechasp);

        // Agrega botones de eliminar y editar a la tarea
        agregarBotones(tareasp, fechasp, guardarTareas1, guardarTareas);
    });
}

// Función para agregar botones de eliminar y editar a los párrafos
function agregarBotones(parrafo1, parrafo2, contenedor, guardarFuncion) {
    // Botón para eliminar la tarea
    let eliminar = document.createElement("button");
    eliminar.innerHTML = "eliminar";
    eliminar.id = "eliminar";
    eliminar.addEventListener("click", function () {
        // Elimina los párrafos y el botón de eliminar
        parrafo1.remove();
        parrafo2.remove();
        eliminar.remove();
        editar.remove();
        // Guarda el estado actualizado en el almacenamiento local
        guardarFuncion();
    });
    contenedor.appendChild(eliminar);

    // Botón para editar la tarea
    let editar = document.createElement("button");
    editar.innerHTML = "editar";
    editar.id = "editar";
    editar.addEventListener("click", function () {
        let newText = prompt("editar nuevo texto", parrafo1.innerHTML);
        if (newText !== null) {
            // Actualiza el texto de la tarea y guarda los cambios
            parrafo1.innerHTML = newText;
            guardarFuncion();
        }
    });
    contenedor.appendChild(editar);
}

// Evento para agregar una nueva tarea
agregar1.addEventListener("click", function () {
    let tareasf = tareas.value;
    let fechasF = fechas.value;
    if (tareasf && fechasF) {
        // Crea y agrega nuevos párrafos para la tarea y su prioridad
        let tareasp = document.createElement("p");
        tareasp.innerHTML = tareasf;
        tareasp.id = "parrafo";
        guardarTareas1.appendChild(tareasp);

        let fechasp = document.createElement("p");
        fechasp.innerHTML = fechasF;
        fechasp.id = "parrafo";
        guardarTareas1.appendChild(fechasp);

        // Agrega los botones de eliminar y editar a la nueva tarea
        agregarBotones(tareasp, fechasp, guardarTareas1, guardarTareas);
        // Guarda la nueva tarea en el almacenamiento local
        guardarTareas();
    } else {
        alert("digite algun dato"); // Muestra una alerta si faltan datos
    }
});

// Obtiene los elementos del DOM necesarios para gestionar eventos
const eventos = document.getElementById("eventos");
const agregarF = document.getElementById("agregarF");
const guardarEventos2 = document.getElementById("guardarEventos2");
const fechasEventos = document.getElementById("fechasEventos");

// Función para guardar los eventos en el almacenamiento local
function guardarEventos() {
    const eventosList = [];
    // Recorre todos los elementos <p> dentro del contenedor de eventos
    guardarEventos2.querySelectorAll("p").forEach((p, index) => {
        // Si el índice es par, se considera un evento
        if (index % 2 === 0) {
            // Añade un objeto evento con su descripción y fecha al array
            eventosList.push({ evento: p.innerHTML, fecha: guardarEventos2.querySelectorAll("p")[index + 1].innerHTML });
        }
    });
    // Guarda el array de eventos en el almacenamiento local en formato JSON
    localStorage.setItem("eventos", JSON.stringify(eventosList));
}

// Función para cargar los eventos desde el almacenamiento local al DOM
function cargarEventos() {
    const eventosList = JSON.parse(localStorage.getItem("eventos")) || [];
    eventosList.forEach(e => {
        // Crea un nuevo elemento <p> para el evento y su fecha
        let eventop = document.createElement("p");
        eventop.innerHTML = e.evento;
        eventop.id = "eventoP";
        guardarEventos2.appendChild(eventop);

        let fechasEventosp = document.createElement("p");
        fechasEventosp.innerHTML = e.fecha;
        fechasEventosp.id = "fechas1";
        guardarEventos2.appendChild(fechasEventosp);

        // Agrega botones de eliminar y editar al evento
        agregarBotones(eventop, fechasEventosp, guardarEventos2, guardarEventos);
    });
}

// Evento para agregar un nuevo evento
agregarF.addEventListener("click", function () {
    let eventosf = eventos.value;
    let fechasEventosf = fechasEventos.value;

    if (eventosf && fechasEventosf) {
        // Crea y agrega nuevos párrafos para el evento y su fecha
        let eventop = document.createElement("p");
        eventop.innerHTML = eventosf;
        eventop.id = "eventoP";
        guardarEventos2.appendChild(eventop);

        let fechasEventosp = document.createElement("p");
        fechasEventosp.innerHTML = fechasEventosf;
        fechasEventosp.id = "fechas1";
        guardarEventos2.appendChild(fechasEventosp);

        // Agrega los botones de eliminar y editar al nuevo evento
        agregarBotones(eventop, fechasEventosp, guardarEventos2, guardarEventos);
        // Guarda el nuevo evento en el almacenamiento local
        guardarEventos();
    } else {
        alert("digite algun dato"); // Muestra una alerta si faltan datos
    }
});

// Carga las tareas y eventos cuando la ventana se carga
window.onload = function () {
    cargarTareas();
    cargarEventos();
}

/* 
    Eventos HTTP:
    get - muestra o trae
    put - edita
    delete - elimina
    post - guarda
*/
