import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BdbMonitorComponent } from './bdb-monitor/bdb-monitor.component';
import { BdbService } from './bdb.service';
import { BdbMonitorService } from './bdb-monitor.service';


@NgModule({
  declarations: [
    AppComponent,
    BdbMonitorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BdbService,
    BdbMonitorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
