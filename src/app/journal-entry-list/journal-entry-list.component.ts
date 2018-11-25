import {Component, OnInit} from '@angular/core';
import {JournalEntry} from '../classes/JournalEntry';
import {JournalService} from '../services/journal.service';

@Component({
  selector: 'app-journal-entry-list',
  templateUrl: './journal-entry-list.component.html',
  styleUrls: ['./journal-entry-list.component.css'],
})
export class JournalEntryListComponent implements OnInit {

  journalList: JournalEntry [];

  constructor(private journalService: JournalService) {
  }

  ngOnInit() {
    this.journalService.getJournalEntries()
      .then(entries => this.journalList = entries);
  }
}
