import { Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.components.html'

})
export class BodyComponent {
    mostrar = true;
    frase: any = {
        mensaje: 'Un gran poder requiere una gran responsabilidad',
        autor : 'Ben Parker'
    };


    personajes: string[] = ['Spiderman', 'Venom', 'Dr. Octupus'];
}
