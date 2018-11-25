import { TestBed } from '@angular/core/testing';

import { CameraMockService } from './camera-mock.service';

describe('CameraMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CameraMockService = TestBed.get(CameraMockService);
    expect(service).toBeTruthy();
  });
});
