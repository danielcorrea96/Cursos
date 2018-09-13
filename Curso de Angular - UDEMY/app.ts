//////////////////////////////////////////////////////
let nombre:string;
nombre="Ricardo Tapia"
let edad:number;
edad = 23; 
let PERSONAJE = { 
    nombre:nombre,
    edad:edad
}
console.log(PERSONAJE);
////////////////////////////////////////////////////
interface Exito { 
    nombre:string; 
    artesMarciales:string[];
}
let batman = { 
    nombre:"Batman", 
    artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}
function enviarInformacion( persona: Exito ) { 
    console.log("Mostrando información relevante de: " + persona.nombre + 
    " que tiene unas habilidades de artes marciales: " + persona.artesMarciales)
}

enviarInformacion(batman);
////////////////////////////////////////////////////////

let resultadoDoble = ( a:number ,b:number ) => (a + b) * 2; 

/////////////////////////////////////////////////////////

function Avenger ( nombre:String , poder:string = "Gol", arma?:string) { 
    let mensaje:string;

    if (arma) { 
        mensaje = `El crack de ${ nombre } tiene un poder de ${ poder } con un arma ${arma}.`
    } else { 
        mensaje = `El crack de ${ nombre } tiene un poder de ${ poder }. `
    }
    
    console.log(mensaje)
}
Avenger("Daniel", "GOLAZO" , "Guayos");
////////////////////////////////////////////////////////////

class Rectangulo { 
    base:number;
    altura:number;
    

    constructor (base:number, altura:number) { 
    this.base = base;
    this.altura = altura;          
    }    
    Calculo () { 
        return this.base * this.altura  
    }
   
}
let paraelRectangulo = new Rectangulo(10,2);
console.log(paraelRectangulo.Calculo());