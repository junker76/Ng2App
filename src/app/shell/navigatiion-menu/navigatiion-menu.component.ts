import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { AppBusService } from '../../services/app-bus.service';

@Component({
  selector: 'app-navigatiion-menu',
  templateUrl: './navigatiion-menu.component.html',
  styleUrls: ['./navigatiion-menu.component.css']
})
export class NavigatiionMenuComponent implements OnInit {

  private appBus : AppBusService;

  constructor(
    @Inject(AppBusService) appBus : AppBusService) { 
      this.appBus = appBus;
  }

  ngOnInit() {
  }

  public IssueCommand1 () {
    this.appBus.IssueCommand('command 1');
  }

  public IssueCommand2 () {
    this.appBus.IssueCommand('command 2');
  }

}
