import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  public getWeather(city: string, state: string) {
    return this.http.get(this.getUrl(city, state)).share();
  }

  private getUrl(city: string, state: string): string {
    console.log('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in ' +
      '(select woeid from geo.places(1) where text=\'' + city + ', ' + state + '\') and u=\'c\'&format=json');
    return 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in ' +
      '(select woeid from geo.places(1) where text=\'' + city + ', ' + state + '\') and u=\'c\'&format=json';
  }

}
