import { Component, OnInit, Input } from '@angular/core';

import { City } from '../../shared/model/city.model';
import { CalendarInterface } from '../../shared/interface/calendar.interface';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  @Input('city') city: City;
  private currentDate: string;
  private currentTime: string;

  constructor() { }

  ngOnInit() {
    this.currentDate = this.dateTimer();
    this.currentTime = this.clockTimer(this.city.timezone);
    setInterval(() => {
      this.currentTime = this.clockTimer(this.city.timezone);
    }, 15000);
  }

  private dateTimer() {
    let _date = new Date();
    let day = _date.getUTCDay();
    let month = _date.getUTCMonth();
    let date: any = _date.getUTCDate();
    let year = _date.getUTCFullYear();

    switch (date) {
      case 1: date = date + 'st'; break;
      case 2: date = date + 'nd'; break;
      case 3: date = date + 'rd'; break;
      default: date = date + 'th'; break;
    }

    return CalendarInterface.weekdays[day] + ', ' + CalendarInterface.months[month] + ' ' + date + ', ' + year;
  }

  private clockTimer(timezone: number) {
    let UTCDate = new Date();
    let timeDiff = timezone * 60 + UTCDate.getTimezoneOffset();
    let offset = timeDiff * 60 * 1000;

    let _date = new Date(new Date().getTime() + offset);
    let hour = _date.getHours();
    let min: any = _date.getMinutes();

    if (min < 10) {
      min = '0' + min;
    }

    return hour + ':' + min;
  }
}
