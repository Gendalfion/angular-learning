import {JournalEntry} from '../classes/JournalEntry';
import {JOURNAL_ENTRIES_MOCK} from '../classes/MockJournalEntries';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {MessagesService} from './messages.service';
import {JournalService} from './journal.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JournalMockService extends JournalService {

  constructor(private messagesService: MessagesService) {
    super();
  }

  getJournalEntries(): Promise<JournalEntry[]> {
    return of(JOURNAL_ENTRIES_MOCK)
      .pipe(delay(1000))
      .toPromise()
      .then(value => {
        this.messagesService.add('JournalMockService: entries loaded');
        return value;
      });
  }

  getJournalEntry(id: string): Promise<JournalEntry> {
    return of(JOURNAL_ENTRIES_MOCK.find(entry => entry.id === id))
      .pipe(delay(1000))
      .toPromise()
      .then(value => {
        this.messagesService.add(`JournalMockService: fetched entry with id=${id}`);
        return value;
      });
  }
}
