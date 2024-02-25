import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { WordlepalApiService } from './wordlepal-api.service';

describe('WordlepalApiService', () => {
  let service: WordlepalApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WordlepalApiService]
    });
    service = TestBed.inject(WordlepalApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
