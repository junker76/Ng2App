import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class AppBusService {

  public Messages: EventEmitter<String> = new EventEmitter();

  constructor() { }

  public IssueCommand (command: String) {
    this.Messages.emit(command);
  }



}
