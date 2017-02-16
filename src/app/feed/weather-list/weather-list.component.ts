import { Component, OnInit, Input } from '@angular/core';

import { Weather } from '../../shared/model/weather.model';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {
  @Input('forecast') forecast: Array<Weather>;
  constructor() { }

  ngOnInit() {
  }
}
