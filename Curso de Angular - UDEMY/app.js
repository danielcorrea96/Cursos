"use strict";
//////////////////////////////////////////////////////
var nombre;
nombre = "Ricardo Tapia";
var edad;
edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
console.log(PERSONAJE);
var batman = {
    nombre: "Batman",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
function enviarInformacion(persona) {
    console.log("Mostrando información relevante de: " + persona.nombre +
        " que tiene unas habilidades de artes marciales: " + persona.artesMarciales);
}
enviarInformacion(batman);
////////////////////////////////////////////////////////
var resultadoDoble = function (a, b) { return (a + b) * 2; };
/////////////////////////////////////////////////////////
function Avenger(nombre, poder, arma) {
    if (poder === void 0) { poder = "Gol"; }
    var mensaje;
    if (arma) {
        mensaje = "El crack de " + nombre + " tiene un poder de " + poder + " con un arma " + arma + ".";
    }
    else {
        mensaje = "El crack de " + nombre + " tiene un poder de " + poder + ". ";
    }
    console.log(mensaje);
}
Avenger("Daniel", "GOLAZO", "Guayos");
////////////////////////////////////////////////////////////
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.Calculo = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}());
var paraelRectangulo = new Rectangulo(10, 2);
console.log(paraelRectangulo.Calculo());
