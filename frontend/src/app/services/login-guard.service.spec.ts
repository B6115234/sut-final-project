import { TestBed } from '@angular/core/testing';

import { LoginGuardService } from './login-guard.service';

describe('AuthGuardService', () => {
  let service: LoginGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
