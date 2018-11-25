import { TestBed } from '@angular/core/testing';

import { JournalMockService } from './journal-mock.service';

describe('JournalMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JournalMockService = TestBed.get(JournalMockService);
    expect(service).toBeTruthy();
  });
});
