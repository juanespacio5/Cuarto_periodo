/* window.onload = () => {
    const titulo = document.getElementById('titulo');
    console.log(titulo.innerHTML);
} */
/* window.onload = () => {
    const titulo = document.getElementById('titulo');
    titulo.innerText = "Nuevo Texto";
    const parrafo = document.getElementById('parrafo');
    parrafo.innerText = "Mi Nuevo Parrafo";
    parrafo.innerHTML = "<ul><li>Elemento 1</li><li>Elemento 2</li></ul>"
} */

//Lista De Actividades --- Activity List
const pendientes = [];
const render = () => {
    const listado = document.getElementById("lista-pendientesq");
    const plantilla = pendientes.map(p => "<li>" + p + "</li>");
    listado.innerHTML = plantilla.join("");
    const elementos = document.querySelectorAll("#lista-pendientes li");
    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click',()=>{
            elemento.parentNode.removeChild(elemento);
            pendientes.splice(i,1);
            render();
        })
    })
}
window.onload = () => {
    const formulario = document.getElementById("formulario-pendientes");
    formulario.onsubmit = (e) => {
        e.preventDefault();
        const pendiente = document.getElementById("pendiente");
        const contenidoPendiente = pendiente.value;
        pendientes.push(contenidoPendiente);
        pendiente.value = "";
        render();
    }
}