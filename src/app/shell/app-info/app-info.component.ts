import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { AppBusService } from '../../services/app-bus.service';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.css']
})
export class AppInfoComponent implements OnInit {

  private LastMessage : String;

  constructor(
    @Inject(AppBusService) appBus : AppBusService) { 
      appBus.Messages.subscribe((cmd : String) => {
        this.LastMessage = cmd;
      })
    }

  ngOnInit() {
  }

  private ReadCommands (cmd : String) {

  }

}
