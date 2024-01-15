import { TestBed } from '@angular/core/testing';

import { WordlepalApiService } from './wordlepal-api.service';

describe('WordlepalApiService', () => {
  let service: WordlepalApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordlepalApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
