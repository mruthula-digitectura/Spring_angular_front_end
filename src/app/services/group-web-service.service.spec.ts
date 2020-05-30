import { TestBed } from '@angular/core/testing';

import { GroupWebServiceService } from './group-web-service.service';

describe('GroupWebServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupWebServiceService = TestBed.get(GroupWebServiceService);
    expect(service).toBeTruthy();
  });
});
