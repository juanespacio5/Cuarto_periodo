function sumar () {
    let num1= parseInt(prompt("escribe un numero: "));
    let num2= parseInt(prompt("escribe otro numero: "));    
    let suma = num1+num2;
    console.log(suma);
}
sumar();
sumar();
sumar();

alert("jajaja xdxdxd");
//Diseñar una funcion que capture el nombre del usuario y despues lo salude dicho nombre capturado.

/* Para resolver el ejercicio necesito capturar el nombre del usuario a traves de una función*/

/* function saludo () {
    let nombre = prompt("escribe tu nombre");
    let apellido = prompt("escribe tu apellido");
    let completo = nombre +" "+apellido;
    alert("bienvenido "+completo);
}
saludo(); */

function bienvenida () {
    let cargo = prompt ("Digite el nombre de su cargo en la compañia: ");
    let nombre = prompt ("Escribe tu nombre por favor: ");
    let tratamiento;
    if (cargo == "gerente" || cargo == "Gerente" || cargo == "GERENTE") {
        tratamiento = "Doctor";
    } else {
        tratamiento = "Señor";
    }
    alert("bienvenido " + tratamiento + " " + nombre);
}
bienvenida();


let arreglo = ["Yamaha", "Royal Einfield", "AKT", "Honda", "Bajaj"];
let arreglo2 = [];
for (let i = 0; i < arreglo.length; i++) {
    arreglo2 [i] = prompt ("Dime una marca de motos que conozcas: ");
}
let arreglo3 = [];
for (let i = 0; i < arreglo2.length; i++) {
    for (let a = 0; a < arreglo2.length; a++) {
        arreglo3[a]= arreglo2 [i]==arreglo[a];
    }
    console.log(arreglo3)
}

window.onload = () => {
    var numero1, numero2, resta, resultado;
    numero1 = Number(prompt("Escribe un numero: "));
    numero2 = Number(prompt("Escribe otro numero por favor: "));
    resta = numero1-numero2;
    resultado = numero1+numero2;
    document.write("La suma dio como resultado:" + resultado + '<BR/>');
    document.write(resta,'<BR/>');
}
//sin_titulo();

//DOM = Document Object Model
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

localStorage.setItem('hola','chao','adios','hasta luego')
localStorage.getItem('hola')