import {Injectable} from '@angular/core';
import {JournalService} from './journal.service';
import {JournalEntry} from '../classes/JournalEntry';
import {HttpClient} from '@angular/common/http';
import {MessagesService} from './messages.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JournalHttpService extends JournalService {

  constructor(
    private http: HttpClient,
    private messagesService: MessagesService
  ) {
    super();
  }

  getJournalEntries(): Promise<JournalEntry[]> {
    return this.http.get<JournalEntry[]>('api/journal')
      .pipe(tap(() => this.messagesService.add('JournalHttpService: journal entries loaded')))
      .toPromise()
      .catch(this.messagesService.handleError('getJournalEntries', []));
  }

  getJournalEntriesByCameraName(camera_name: string): Promise<JournalEntry[]> {
    return this.http.get<JournalEntry[]>(`api/journal/?camera_name=${camera_name}`)
      .pipe(tap(() => this.messagesService.add(`JournalHttpService: journal entries loaded by camera name="${camera_name}"`)))
      .toPromise()
      .catch(this.messagesService.handleError('getJournalEntriesByCameraName', []));
  }

  getJournalEntry(id: string): Promise<JournalEntry> {
    return this.http.get<JournalEntry>(`api/journal/${id}`)
      .pipe(tap(() => this.messagesService.add(`JournalHttpService: loaded journal entry with id=${id}`)))
      .toPromise()
      .catch(this.messagesService.handleError('getJournalEntry'));
  }
}
