import {Injectable} from '@angular/core';
import {JournalEntry} from '../classes/JournalEntry';
import {JOURNAL_ENTRIES_MOCK} from '../classes/MockJournalEntries';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {MessagesService} from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class JournalMockService {

  constructor(private messagesService: MessagesService) {
  }

  getJournalEntries(): Promise<JournalEntry[]> {
    return of(JOURNAL_ENTRIES_MOCK)
      .pipe(delay(1000))
      .toPromise()
      .then(value => {
        this.messagesService.add('Mock journal entries loaded');
        return value;
      });
  }
}
