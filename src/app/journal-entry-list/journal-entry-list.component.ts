import {Component, OnInit} from '@angular/core';
import {JournalEntry} from '../classes/JournalEntry';
import {JournalMockService} from '../services/journal-mock.service';

@Component({
  selector: 'app-journal-entry-list',
  templateUrl: './journal-entry-list.component.html',
  styleUrls: ['./journal-entry-list.component.css']
})
export class JournalEntryListComponent implements OnInit {

  journalList: JournalEntry [];

  selectedEntry: JournalEntry = null;

  constructor(private journalService: JournalMockService) {
  }

  ngOnInit() {
    this.journalService.getJournalEntries()
      .then(entries => this.journalList = entries);
  }

  onSelect(entry: JournalEntry) {
    this.selectedEntry = entry;
  }
}
