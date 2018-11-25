import {Component, OnInit} from '@angular/core';
import {JournalEntry} from '../classes/JournalEntry';
import {JournalService} from '../services/journal.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-journal-entry-list',
  templateUrl: './journal-entry-list.component.html',
  styleUrls: ['./journal-entry-list.component.css'],
})
export class JournalEntryListComponent implements OnInit {

  journalList: JournalEntry [];

  cameraNameFilter: string = null;

  constructor(
    private route: ActivatedRoute,
    private journalService: JournalService,
    private location: Location
  ) {
  }

  ngOnInit() {
    const cameraName = this.route.snapshot.paramMap.get('name');
    this.cameraNameFilter = cameraName || null;
    (cameraName && this.journalService.getJournalEntriesByCameraName(cameraName) || this.journalService.getJournalEntries())
      .then(entries => this.journalList = entries);
  }

  clearFilter() {
    location.assign('/journal');
  }
}
