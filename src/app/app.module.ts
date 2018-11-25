import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JournalEntryComponent } from './journal-entry/journal-entry.component';
import {FormsModule} from '@angular/forms';
import { JournalEntryListComponent } from './journal-entry-list/journal-entry-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {JournalService} from './services/journal.service';
import {JournalMockService} from './services/journal-mock.service';
import {CameraService} from './services/camera.service';
import {CameraMockService} from './services/camera-mock.service';

@NgModule({
  declarations: [
    AppComponent,
    JournalEntryComponent,
    JournalEntryListComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    {provide: JournalService, useClass: JournalMockService},
    {provide: CameraService, useClass: CameraMockService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
