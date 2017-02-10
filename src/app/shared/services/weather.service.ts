import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";

@Injectable()
export class WeatherService {
  private yahooWeatherUrl = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=\'campinas, sp\') and u=\'c\'&format=json';

  constructor(private http: Http) { }

  public getWeather(city: string) {
    return this.http.get(this.yahooWeatherUrl).share();
  }

}
