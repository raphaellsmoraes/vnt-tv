import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../shared/services/weather.service';
import { Weather } from '../shared/model/weather.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  private city: string;
  private forecast: Array<Weather>;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.city = 'Campinas';
    this.forecast = new Array<Weather>();

    this.weatherService.getWeather(this.city)
      .map(response => response.json())
      .subscribe(res => {
        console.log(res.query.results.channel.item.condition);
        this.forecast.push(new Weather(res.query.results.channel.item.condition));
        for (let weather of res.query.results.channel.item.forecast) {
            this.forecast.push(
              new Weather(weather)
            );
        }
        this.forecast = this.forecast.filter(item => item !== res.query.results.channel.item.forecast[0]);
        console.log(this.forecast[1]);
        console.log('Current Temp - ' + this.forecast[1].temp);
      });
  }

}
