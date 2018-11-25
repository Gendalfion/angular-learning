import {JournalEntry} from '../classes/JournalEntry';

export abstract class JournalService {
  abstract getJournalEntries(): Promise<JournalEntry[]>;

  abstract getJournalEntry(id: string): Promise<JournalEntry>;
}
