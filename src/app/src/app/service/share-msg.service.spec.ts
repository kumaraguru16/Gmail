import { TestBed } from '@angular/core/testing';

import { ShareMsgService } from './share-msg.service';

describe('ShareMsgService', () => {
  let service: ShareMsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareMsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
