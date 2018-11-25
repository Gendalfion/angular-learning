import { TestBed } from '@angular/core/testing';

import { CameraHttpService } from './camera-http.service';

describe('CameraHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CameraHttpService = TestBed.get(CameraHttpService);
    expect(service).toBeTruthy();
  });
});
