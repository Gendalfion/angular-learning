import {JournalEntry} from '../classes/JournalEntry';

export abstract class JournalService {
  abstract getJournalEntries(): Promise<JournalEntry[]>;

  abstract getJournalEntriesByCameraName(camera_name: string): Promise<JournalEntry[]>;

  abstract getJournalEntry(id: string): Promise<JournalEntry>;
}
