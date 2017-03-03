/**
 * Model that represents an event
 */
import { Projects } from './projects.model';
import { EventTypes } from '../interface/types.enum';
import { City } from './city.model';
import { Topic } from './topic.model';

export class Event {
  type: EventTypes;
  cities?: Array<City>;
  news?: Array<Topic>;
  projects?: Array<Projects>;

  constructor(type: EventTypes, cities?: Array<City>, news?: Array<Topic>, projects?: Array<Projects>) {
    this.type = type;
    this.cities = cities;
    this.news = news;
    this.projects = projects;
  }
}
