import { TestBed } from '@angular/core/testing';

import { JournalHttpService } from './journal-http.service';

describe('JournalHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JournalHttpService = TestBed.get(JournalHttpService);
    expect(service).toBeTruthy();
  });
});
