import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppBusService } from './services/app-bus.service';

import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { NavigatiionMenuComponent } from './shell/navigatiion-menu/navigatiion-menu.component';
import { WorkItemsComponent } from './shell/work-items/work-items.component';
import { AppInfoComponent } from './shell/app-info/app-info.component';


@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    NavigatiionMenuComponent,
    WorkItemsComponent,
    AppInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AppBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
