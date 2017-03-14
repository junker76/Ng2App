import { Component, OnInit } from '@angular/core';

import { NavigatiionMenuComponent } from './navigatiion-menu/navigatiion-menu.component';
import { WorkItemsComponent } from './work-items/work-items.component';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
