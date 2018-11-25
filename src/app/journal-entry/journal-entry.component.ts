import { Component, OnInit } from '@angular/core';
import {JournalEntry} from '../classes/JournalEntry';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.css']
})
export class JournalEntryComponent implements OnInit {

  private entry: JournalEntry = {
    id: '1',
    camera_name: 'Camera 1',
    date: new Date(),
    viewed: false
  };

  formatDate(): String {
    return this.entry.date.toDateString();
  }

  constructor() { }

  ngOnInit() {
  }

}
