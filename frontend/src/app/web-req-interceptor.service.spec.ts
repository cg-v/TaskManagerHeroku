import { TestBed } from '@angular/core/testing';

import { WebRequestService } from './web-request.service';

describe('WebReqInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebRequestService = TestBed.get(WebRequestService);
    expect(service).toBeTruthy();
  });
});
