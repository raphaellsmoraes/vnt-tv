import { Component, OnInit } from '@angular/core';
import { City } from './shared/model/city.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private cities: Array<City>;

  ngOnInit() {
    this.setCities();
    setInterval(() => {
      this.cities = this.rotateArray(this.cities, 1);
    }, 10000);
  }

  setCities() {
    this.cities = new Array<City>();
    this.cities.push(new City('Campinas', 'SP', 'campinas', -3, 'BRT'));
    this.cities.push(new City('Chennai', 'TM', 'chennai', 5.5, 'IST'));
    this.cities.push(new City('Frankfurt', 'HE', 'frankfurt', 1, 'CET'));
    this.cities.push(new City('Karlskrona', 'K', 'karlskrona', 1, 'CET'));
    this.cities.push(new City('Mumbai', 'MH', 'mumbai', 5.5, 'IST'));
    this.cities.push(new City('Stockholm', 'AB', 'stockholm', 1, 'CET'));
    this.cities.push(new City('São Paulo', 'SP', 'sao-paulo', -3, 'BRT'));
  }

  setStyles() {
    let styles = {
      'background': this.cities ? 'url(\'/assets/background/' + this.cities[0].filename + '\')' :
        'url(\'/assets/weather/3200.png\') no-repeat center/80%'
    };
    return styles;
  }

  rotateArray(arr: Array<any>, n: number) {
    let L = arr.length;
    return arr.slice(L - n).concat(arr.slice(0, L - n));
  }
}
