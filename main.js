//Lista De Actividades --- Activity List
const pendientes = JSON.parse(localStorage.getItem('pendientes')) || [];

const render = () => {
    const listado = document.getElementById("lista-pendientes");
    const plantilla = pendientes.map(p => "<li>" + p + "</li>");
    listado.innerHTML = plantilla.join("");
    const elementos = document.querySelectorAll("#lista-pendientes li");
    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click',()=>{
            elemento.parentNode.removeChild(elemento);
            pendientes.splice(i,1);
            actualizarPendientes(pendientes);
            render();
        })
    })
}

const actualizarPendientes = () => {
    const pendientesCadena = JSON.stringify(pendientes);
    localStorage.setItem('pendientes',pendientesCadena);
}

window.onload = () => {
    render();
    const formulario = document.getElementById("formulario-pendientes");
    formulario.onsubmit = (e) => {
        e.preventDefault();
        const pendiente = document.getElementById("pendiente");
        const contenidoPendiente = pendiente.value;
        pendiente.value = "";
        pendientes.push(contenidoPendiente);
        actualizarPendientes(pendientes);
        render();
    }
}