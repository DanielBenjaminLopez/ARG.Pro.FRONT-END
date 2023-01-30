import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Portafolio';

  cities = ['Corrientes', 'Salta', 'Buenos Aires', 'Misiones', 'Santa Fe'];
  portada =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIgeYD_L_QfrfKoMBesOrRlMXkVZPmn9R0mg&usqp=CAU';
  selection!: string;
  nombre = 'ejemplo';

  onCityClicked(city: string): void {
    console.log('City ->', city);
    this.selection = city;
  }

  onClear(): void {
    this.selection = '';
  }

  addNewCity(city: string): void {
    this.cities.push(city);
  }
}
