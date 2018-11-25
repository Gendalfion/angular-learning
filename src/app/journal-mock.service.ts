import {Injectable} from '@angular/core';
import {JournalEntry} from './classes/JournalEntry';
import {JOURNAL_ENTRIES_MOCK} from './classes/MockJournalEntries';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JournalMockService {

  constructor() {
  }

  getJournalEntries(): Observable<JournalEntry[]> {
    return of(JOURNAL_ENTRIES_MOCK)
      .pipe(delay(1000));
  }
}
