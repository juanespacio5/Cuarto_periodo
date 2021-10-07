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
