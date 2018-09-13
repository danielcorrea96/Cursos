import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verContrasena'
})
export class VerContrasenaPipe implements PipeTransform {
  contra: string;
  transform(value: string , activar: boolean = true): any {
    if (activar) {
      let salida = ' ';
    for (let i = 0; i < value.length; i++) {
      salida += '*';

    }
    return salida;
    } else {
      return value;
   }
}
}
