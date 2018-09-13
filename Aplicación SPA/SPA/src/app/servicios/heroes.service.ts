import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {
    private heroes: Heroe[] =  [
        {
          nombre: 'AQUAMAN',
          index: 1,
          // tslint:disable-next-line:max-line-length
          bio: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
          img: 'assets/img/aquaman.png',
          img2: 'assets/img/justice_league_aquaman_png_by_stark3879-dbtz2nt.png',
          aparicion: '1941-11-01',
          casa: 'assets/img/DC_Comics_logo.svg.png'
        },
        {
          nombre: 'BATMAN',
          index: 2,
          // tslint:disable-next-line:max-line-length
          bio: 'Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.',
          img: 'assets/img/batman.png',
          img2: 'assets/img/batman_PNG52.png',
          aparicion: '1939-05-01',
          casa: 'assets/img/DC_Comics_logo.svg.png'
        },
        {
          nombre: 'DAREDEVIL',
          index: 3,
          // tslint:disable-next-line:max-line-length
          bio: 'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede "ver" a través de un "sexto sentido" que le sirve como un radar similar al de los murciélagos.',
          img: 'assets/img/daredevil.png',
          img2: 'assets/img/daredevil-2.png',
          aparicion: '1964-01-01',
          casa: 'assets/img/Marvel-comics-logo-vector.png'
        },
        {
          nombre: 'HULK',
          index: 4,
          // tslint:disable-next-line:max-line-length
          bio: 'Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).',
          img: 'assets/img/hulk.png',
          img2: 'assets/img/Hulk-PNG-Pic.png',
          aparicion: '1962-05-01',
          casa: 'assets/img/Marvel-comics-logo-vector.png'
        },
        {
          nombre: 'LINTERNA VERDE',
          index: 5,
          // tslint:disable-next-line:max-line-length
          bio: 'Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)',
          img: 'assets/img/linterna-verde.png',
          img2: 'assets/img/366px-Greenlantern.png',
          aparicion: '1940-06-01',
          casa: 'assets/img/DC_Comics_logo.svg.png'
        },
        {
          nombre: 'SPIDER-MAN',
          index: 6,
          // tslint:disable-next-line:max-line-length
          bio: 'Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un "sentido arácnido", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
          img: 'assets/img/spiderman.png',
          img2: 'assets/img/-spiderman-clipart-png.png',
          aparicion: '1962-08-01',
          casa: 'assets/img/Marvel-comics-logo-vector.png'
        },
        {
          nombre: 'WOLVERINE',
          index: 7,
          // tslint:disable-next-line:max-line-length
          bio: 'En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.',
          img: 'assets/img/wolverine.png',
          img2: 'assets/img/3486116-wolverine_full_artwork.png',
          aparicion: '1974-11-01',
          casa: 'assets/img/Marvel-comics-logo-vector.png'
        }
      ];
    constructor() {
        console.log('Servicio listo para usar!!');
     }
     getHeroes () {
         return this.heroes;
     }
    getHero(idx: string) {
        return this.heroes[idx];
    }
    getHero2 (name: string) {
        return this.heroes[name];
    }
    buscarHeroes( termino: string ): Heroe[] {
        const heroesArr: Heroe[] = [];
         termino = termino.toLowerCase();
          for (let i = 0 ; i < this.heroes.length; i++) {
            const heroe = this.heroes[i];
              const nombre = heroe.nombre.toLowerCase();
               if ( nombre.indexOf(termino) >= 0) {
                 heroe.idx = i;
                    heroesArr.push( heroe );
                 }
             }
             return heroesArr;
            }
}
  export interface Heroe {
          nombre: string;
          index: number;
          // tslint:disable-next-line:max-line-length
          bio: string;
          img: string;
          img2: string;
          aparicion: string;
          casa: string;
          idx?: number;
 }
