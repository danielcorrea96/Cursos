import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'banderas'})
export class BanderasPipe implements PipeTransform {

    transform(value: any): any {
    switch (value) {
    case 'Colombia':
    return 'co';

    case 'Argentina':
    return 'ar';

    case 'Alemania':
    return 'de';

    case 'Russia':
    return 'ru';

    case 'Saudi Arabia':
    return 'sa';

    case 'Egypt':
    return 'eg';

    case 'Uruguay':
    return 'uy';

   case 'Portugal':
    return 'pt';

    case 'Spain':
    return 'es';

    case 'Morocco':
    return 'ma';

    case 'Iran':
    return 'ir';

    case 'France':
    return 'fr';

    case 'Australia':
    return 'au';

    case 'Peru':
    return 'pe';

    case 'Denmark':
    return 'dk';

    case 'Iceland':
    return 'is';

    case 'Croatia':
    return 'hr';

    case 'Nigeria':
    return 'ng';

    case 'Brazil':
    return 'br';

    case 'Switzerland':
    return 'ch';

    case 'Costa Rica':
    return 'cr';

    case 'Serbia':
    return 'rs';

    case 'Mexico':
    return 'mx';

    case 'Sweden':
    return 'se';

    case 'South Korea':
    return 'kr';

    case 'Belgium':
    return 'be';

    case 'Panama':
    return 'pa';

    case 'Tunisia':
    return 'tn';

    case 'England':
    return 'gb';

    case 'Poland':
    return 'pl';

    case 'Senegal':
    return 'sn';

    case 'Japan':
    return 'jp';


    }
    }
}
