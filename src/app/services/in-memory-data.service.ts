import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {JOURNAL_ENTRIES_MOCK} from '../classes/MockJournalEntries';
import {Camera} from '../classes/Camera';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    const cameras: Camera [] = JOURNAL_ENTRIES_MOCK
      .map(journalEntry => journalEntry.camera_name)
      .reduce((x, y) => x.includes(y) ? x : [...x, y], [])
      .map((val, ind) => ({id: ind, name: val}));

    return {
      'journal': JOURNAL_ENTRIES_MOCK,
      'cameras': cameras
    };
  }
}
