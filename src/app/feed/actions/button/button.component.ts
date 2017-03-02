import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input('type') type: string;
  @Input('active') active: boolean = false;

  constructor() { }

  ngOnInit() {
    if (this.type === 'Weather') {
      this.active = true;
    }
  }

  setClasses() {
    return {
      weather: this.type === 'Weather' ? true : false,
      news: this.type === 'News' ? true : false,
      projects: this.type === 'Projects' ? true : false,
    };
  }

}
