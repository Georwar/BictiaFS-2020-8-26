var nombre5 = "Maria Perez";

console.log(nombre5);


const nombre6 = "Pedro Sanchez";

let nombrelet = "Laura Martinez";

/* Variables globales y locales
si se declara dentro de una funcion o unas llaves solo se puede utilizar dentro de ese bloque de codigo */
var global = 0;

function varGlobal() {

    for (var i = 0; i < 5; i++) {
        global = i;
    };
};

varGlobal();
console.log("La variable global es igual a " + global);


function varLocal() {

    var local = "Hola Mundo";
    console.log("La variable local es igual a " +
        local)
}

varLocal();
/*console.log("La variable local es igual a " + local);
 NOS ARROJA ERROR PORQ ES UNA VARIABLE LOCAL */

function varPrueba() {
    var x = 70;
    if (true) {
        var x = 50;
        console.log(x);
    }

    console.log(x);
};


function letPrueba() {
    let y = 30;
    if (true) {
        let y = 60;
        console.log(y);
    }

    console.log(y);
};

/* Funciones */

function operacion(num1, num2) {

    return num1 + num2;

}

console.log("el resultado de la funcion operacion es " + operacion(5, 3));

let sumar = (a, b) => a + b;
console.log("el resultado de la funcion flecha es " + +sumar(10, 15));

let hola = function () {
    return "Hola,como estas";
}

console.log(hola());

/* condicionales */

/* let color = prompt("Ingrese el color en Ingles");

if (color == "red") {
    document.write("<h1 style='color:red'> si el color es red - rojo < /h1>");

} else {
    document.write("<h1 style='color:" + color + "'> no el color no es red, el color escojido fue " + color + "</h1>");
}
 */

/* switch */


var operacion = prompt("por favor Ingrese operacion suma,multiplicacion,resta o division");

let num1 = parseFloat(prompt("ingrese in numero"));
let num2 = parseFloat(prompt("ingrese in numero2"));

switch (operacion) {
    case "suma":
        /* si es igual a suma */




        document.write("<br>el resultado de la suma es: " + (num1 + num2));

        break;

    case "resta":
        /* si es igual a suma */



        document.write("<br>el resultado de la resta es: " + (num1 - num2));

        break;

    case "multiplicacion":
        /* si es igual a suma */




        document.write(" <br>el resultado de la multiplicacion es: " + (num1 * num2));

        break;

    case "division":
        /* si es igual a suma */




        document.write("<br>el resultado de la Division es: " + (num1 / num2));

        break;

    default:
        document.write("Esta operacion no existe");
        break;
}