import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { City } from '../shared/model/city.model';
import { WeatherService } from '../shared/services/weather.service';
import { Weather } from '../shared/model/weather.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnChanges {
  @Input('city') city: City;
  private forecast: Array<Weather>;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.forecast = new Array<Weather>();
  }



  ngOnChanges() {
    this.forecast = new Array<Weather>();
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather(this.city.name, this.city.state)
      .map(response => response.json())
      .subscribe(res => {
        res.query.results.channel.item.condition.size = '33.3%';
        res.query.results.channel.item.condition.main = true;
        res.query.results.channel.item.condition.date = new Date();
        this.forecast.push(new Weather(res.query.results.channel.item.condition));
        for (let weather of res.query.results.channel.item.forecast) {
          weather.date = new Date(weather.date);
          weather.size = 'calc(33.3% / 3)';
          weather.main = false;
          this.forecast.push(
            new Weather(weather)
          );
        }
        this.forecast.splice(1, 1);
        this.forecast = this.forecast.slice(0, 7);
      });
  }

  setStyles() {
    let styles = {
      'background-image': this.city ? 'url(\'/assets/background/' + this.city.filename + '\')' :
        'url(\'/assets/weather/3200.png\')'
    };
    return styles;
  }

}
