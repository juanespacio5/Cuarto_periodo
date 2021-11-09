/* window.onload = () => {
    const titulo = document.getElementById('titulo');
    console.log(titulo.innerHTML);
} */
window.onload = () => {
    const titulo = document.getElementById('titulo');
    titulo.innerText = "Nuevo Texto";
    const parrafo = document.getElementById('parrafo');
    parrafo.innerText = "Mi Nuevo Parrafo";
    parrafo.innerHTML = "<ul><li>Elemento 1</li><li>Elemento 2</li></ul>"
}