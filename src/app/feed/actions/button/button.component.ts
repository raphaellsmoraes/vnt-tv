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
  }

  setClasses() {
    return {
      weather: this.type === 'weather' ? false : true,
      news: this.type === 'news' ? false : true,
      projects: this.type === 'projects' ? false : true
    };
  }

}
