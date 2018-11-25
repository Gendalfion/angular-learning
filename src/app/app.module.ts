import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {JournalEntryComponent} from './journal-entry/journal-entry.component';
import {FormsModule} from '@angular/forms';
import {JournalEntryListComponent} from './journal-entry-list/journal-entry-list.component';
import {MessagesComponent} from './messages/messages.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {JournalService} from './services/journal.service';
import {JournalMockService} from './services/journal-mock.service';
import {CameraService} from './services/camera.service';
import {CameraMockService} from './services/camera-mock.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data.service';
import {JournalHttpService} from './services/journal-http.service';
import {CameraHttpService} from './services/camera-http.service';

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
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
  ],
  providers: [
    // {provide: JournalService, useClass: JournalMockService},
    {provide: JournalService, useClass: JournalHttpService},
    // {provide: CameraService, useClass: CameraMockService},
    {provide: CameraService, useClass: CameraHttpService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
