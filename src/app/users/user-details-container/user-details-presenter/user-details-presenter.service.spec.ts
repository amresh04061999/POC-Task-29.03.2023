import { TestBed } from '@angular/core/testing';

import { UserDetailsPresenterService } from './user-details-presenter.service';

describe('UserDetailsPresenterService', () => {
  let service: UserDetailsPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDetailsPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
