import { TestBed } from '@angular/core/testing';

import { LoginWebService } from './login-web.service';

describe('LoginWebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginWebService = TestBed.get(LoginWebService);
    expect(service).toBeTruthy();
  });
});
