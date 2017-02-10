import { Component, OnInit } from '@angular/core';
import { City } from './shared/model/city.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private cities: any = {};

  ngOnInit() {
    this.cities['campinas'] = new City('Campinas', 'SP', true);
    this.cities['saopaulo'] = new City('São Paulo', 'SP', false);
  }

  getCity() {
    return {
      campinas: this.cities['campinas'].active,
      saopaulo: this.cities['saopaulo'].active
    };
  }
}
