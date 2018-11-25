import {Injectable} from '@angular/core';
import {CameraService} from './camera.service';
import {MessagesService} from './messages.service';
import {JOURNAL_ENTRIES_MOCK} from '../classes/MockJournalEntries';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CameraMockService extends CameraService {

  constructor(private messageService: MessagesService) {
    super();
  }

  getCameraNames(): Promise<string[]> {
    return of(
      JOURNAL_ENTRIES_MOCK
        .map(journalEntry => journalEntry.camera_name)
        .reduce((x, y) => x.includes(y) ? x : [...x, y], [] )
    ).pipe(delay(1000))
      .toPromise()
      .then(value => {
        this.messageService.add('Camera list fetched');
        return value;
      });
  }
}
