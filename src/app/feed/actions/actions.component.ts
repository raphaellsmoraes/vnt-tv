import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  private active: boolean = false;
  private actions: Array<string> = ['Weather', 'News', 'Projects'];

  constructor() { }

  ngOnInit() {
  }

}
