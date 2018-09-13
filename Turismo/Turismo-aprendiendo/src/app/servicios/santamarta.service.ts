import { Injectable } from '@angular/core';
@Injectable()
export class SantaMartaService {
    private santamarta: Santa[] = [
        {
            titulo: 'QUINTA DE SAN PEDRO ALEJANDRINO',
            img: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res60/63000/63225-Quinta-De-San-Pedro-Alejandrino.jpg',
            // tslint:disable-next-line:max-line-length
            descripcion: 'La Hacienda Florida de San Pedro Alejandrino es un suelo enriquecido por las más grandes expresiones de la historia, el arte y la naturaleza, en este sacro lugar exhalo su último suspiro el más grande de los hijos de América, nuestro libertador Simón Bolívar'


        },
        {
            titulo: 'MUSEO DEL ORO TAIRONA',
            img: 'https://pbs.twimg.com/media/DS0EcINWsAAPgyf.jpg',
            // tslint:disable-next-line:max-line-length
            descripcion: 'Inaugurado en 2014, el Museo del Oro Tairona Casa de la Aduana es el nuevo punto de encuentro de la cultura en Santa Marta y un complemento a la valiosa labor cultural y educativa que ofrece a los samarios la Biblioteca del Banco de la República. Una extraordinaria colección, una exposición que pone en contexto el patrimonio cultural y una hermosa casa colonial restaurada invitan a explorar el pasado y el presente de Santa Marta, del departamento del Magdalena y de la Sierra Nevada de Santa Marta'


        },
        {
            titulo: 'PARQUE SANTANDER O PARQUE DE LOS NOVIOS',
            img: 'https://i.ytimg.com/vi/ZRO6nAPjdks/maxresdefault.jpg',
            // tslint:disable-next-line:max-line-length
            descripcion: 'El parque Santander, llamado así en honor al Hombre de las Leyes, Francisco de Paula Santander, es mejor conocido como el Parque de los Novios —este nombre bien se lo debemos a las fiestas nocturnas, llamadas retretas, a las que acudían desde luego, incontables parejas, o bien porque en la actualidad los enamorados mantienen la tradición de acercarse a este foco de romances— y se encuentra ubicado en la zona céntrica, muy cerca del Palacio de Justicia.'


        },
        {
            titulo: 'EL RODADERO',
            img: 'http://guiamultimedia.com.co/Santa_marta/clientes/rodadero/ban.jpg',
            // tslint:disable-next-line:max-line-length
            descripcion: 'El Rodadero es una playa ubicada en Santa Marta, Colombia y es el punto más visitado de la ciudad. A 5 km del centro de la ciudad, esta playa es un símbolo de la ciudad visitada por turistas de todo el país.'


        },
        {
            titulo: 'PARQUE SIMÓN BOLIVAR',
            img: 'http://santamartacultural.gov.co/contenido/wp-content/uploads/parque-simon-bolivar-1200x675.jpg',
            // tslint:disable-next-line:max-line-length
            descripcion: 'El Parque Simón Bolívar es el parque mas antiguo de Santa Marta, en el se encuentra un monumento de nuestro Libertador, el cual se compone de una figura ecuestre del Libertador a gran escala, elaborada completamente en bronce, erigida sobre un pedestal en mármol, mostrando en su frente el escudo nacional y en sus costados unas palabras alusivas también en bronce. Obsequio hecho por el Gobierno de Venezuela en 1953 como homenaje por parte de Venezuela y de la ciudad de Santa Marta a esta gran figura.'


        },
        {
            titulo: 'PARQUE TAYRONA',
            img: 'http://new-hls.s3.amazonaws.com/hls/data/2250/website/general/bn/parque-tayrona-banner-1.jpg',
            // tslint:disable-next-line:max-line-length
            descripcion: 'El Parque Nacional Natural Tayrona se encuentra ubicado en la ciudad de Santa Marta en Colombia. Su superficie hace parte del departamento de Magdalena. A 34 km del centro urbano de Santa Marta es uno de los parques naturales más importantes de Colombia. Es hábitat de una gran cantidad de especies que se distribuyen en regiones con diferentes pisos térmicos que van desde el nivel del mar hasta alturas de 900 m.'

        },
    ];
    constructor() {
        console.log('Servicio listo para usar!!');
     }
     getStios() {
         return this.santamarta;
     }
     getSitioTurist( idx: string) {
        return this.santamarta[idx];
     }

     buscarSitio( termino: string ): Santa[] {
        const sitiosArr: Santa[] = [];
        termino = termino.toLowerCase();
        for ( let i = 0; i < this.santamarta.length; i++) {
            const santa = this.santamarta[i];
                const sitio2 = santa.titulo.toLowerCase();
                if ( sitio2.indexOf(termino) >= 0 ) {
                    santa.idx = i;
                    sitiosArr.push( santa );
                }
        }
        return sitiosArr;
     }
 }
 export interface Santa {
    titulo: string;
    img: string;
    descripcion: string;
    idx?: number;
 }
