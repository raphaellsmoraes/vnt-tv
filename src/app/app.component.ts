import { Component, OnInit } from '@angular/core';
import { City } from './shared/model/city.model';
import { Event } from './shared/model/event.model';
import { Topic } from './shared/model/topic.model';
import { Projects } from './shared/model/projects.model';
import { EventTypes } from './shared/interface/types.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private event: Event;

  ngOnInit() {
    this.setEvents(EventTypes.Weather);
    setInterval(() => {
      this.event.cities = this.rotateArray(this.event.cities, 1);
    }, 10000);
  }

  setEvents(eventType: EventTypes) {
    switch (eventType) {
      case EventTypes.Weather:
        this.event = new Event(
          EventTypes.Weather,
          this.setCities()
        );
        break;
      case EventTypes.News:
        this.event = new Event(
          EventTypes.Weather,
          null, this.setNews()
        );
        break;
      case EventTypes.Projects:
        this.event = new Event(
          EventTypes.Projects,
          null, null, this.setProjects()
        );
        break;
      default:
      case EventTypes.Weather:
        this.event = new Event(
          EventTypes.Weather,
          this.setCities()
        );
        break;
    }
  }

  setProjects(): Array<Projects> {
    let projects = new Array<Projects>();

    return projects;
  }

  setNews(): Array<Topic> {
    let news = new Array<Topic>();
    return news;
  }

  setCities(): Array<City> {
    let cities = new Array<City>();
    cities.push(new City('Campinas', 'SP', 'campinas', -3, 'BRT'));
    cities.push(new City('Chennai', 'TM', 'chennai', 5.5, 'IST'));
    cities.push(new City('Frankfurt', 'HE', 'frankfurt', 1, 'CET'));
    cities.push(new City('Karlskrona', 'K', 'karlskrona', 1, 'CET'));
    cities.push(new City('Mumbai', 'MH', 'mumbai', 5.5, 'IST'));
    cities.push(new City('Stockholm', 'AB', 'stockholm', 1, 'CET'));
    cities.push(new City('São Paulo', 'SP', 'sao-paulo', -3, 'BRT'));
    return cities;
  }

  setStyles() {
    let styles = {
      'background': this.event.cities ? 'url(\'/assets/background/' + this.event.cities[0].filename + '\')' :
        'url(\'/assets/weather/3200.png\') no-repeat center/80%'
    };
    return styles;
  }

  rotateArray(arr: Array<any>, n: number) {
    let L = arr.length;
    return arr.slice(L - n).concat(arr.slice(0, L - n));
  }
}
