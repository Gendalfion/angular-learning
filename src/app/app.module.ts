import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JournalEntryComponent } from './journal-entry/journal-entry.component';
import {FormsModule} from '@angular/forms';
import { JournalEntryListComponent } from './journal-entry-list/journal-entry-list.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    JournalEntryComponent,
    JournalEntryListComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
