import { Component, OnInit } from '@angular/core';
import {JOURNAL_ENTRIES_MOCK} from '../classes/MockJournalEntries';
import {JournalEntry} from '../classes/JournalEntry';

@Component({
  selector: 'app-journal-entry-list',
  templateUrl: './journal-entry-list.component.html',
  styleUrls: ['./journal-entry-list.component.css']
})
export class JournalEntryListComponent implements OnInit {

  journalList = JOURNAL_ENTRIES_MOCK;

  selectedEntry: JournalEntry = null;

  constructor() { }

  ngOnInit() {
  }

  onSelect(entry: JournalEntry) {
    this.selectedEntry = entry;
  }
}
