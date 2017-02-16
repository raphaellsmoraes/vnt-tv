import { Component, OnInit, Input } from '@angular/core';

import { Weather } from '../../../shared/model/weather.model';
import { CalendarInterface } from '../../../shared/interface/calendar.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  @Input('weather') weather?: Weather;
  private weekday: string;

  constructor() { }

  ngOnInit() {
    this.weekday = CalendarInterface.weekdays[this.weather.date.getDay()];
  }

  setStyles() {
    let styles = {
      'background': this.weather.code ? 'url(\'/assets/weather/' + this.weather.code + '.png\') no-repeat center/80%' :
        'url(\'/assets/weather/3200.png\') no-repeat center/80%'
    };
    return styles;
  }
}
