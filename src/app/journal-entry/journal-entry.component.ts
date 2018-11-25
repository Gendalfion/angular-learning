import {Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {JournalEntry} from '../classes/JournalEntry';
import {ActivatedRoute} from '@angular/router';
import {JournalService} from '../services/journal.service';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.css']
})
export class JournalEntryComponent implements OnInit {

  @Input() entry: JournalEntry = null;

  formatDate(): String {
    return this.entry.date.toDateString();
  }

  constructor(
    private route: ActivatedRoute,
    private journalService: JournalService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    console.log('id = ' + id);

    this.journalService.getJournalEntry(id)
      .then(entry => this.entry = entry);
  }

  goBack() {
    this.location.back();
  }
}
