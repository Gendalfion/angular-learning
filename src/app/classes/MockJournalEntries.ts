import {JournalEntry} from './JournalEntry';

export const JOURNAL_ENTRIES_MOCK: JournalEntry[] = Array.apply(null, {length: 10}).map((value, index) => ({
  id: '' + index,
  date: new Date(2018, 10, Math.floor(Math.random() * 30)),
  camera_name: 'Camera ' + Math.floor(1 + Math.random() * 10),
  viewed: false
}));
