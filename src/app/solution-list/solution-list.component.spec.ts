import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionListComponent } from './solution-list.component';
import { WordlepalApiService } from '../services/wordlepal-api.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SolutionListComponent', () => {
  let component: SolutionListComponent;
  let fixture: ComponentFixture<SolutionListComponent>;

  beforeEach(async () => {
    const mockWordlepalApiService = jasmine.createSpyObj(['getAllSolutions']);
    mockWordlepalApiService.getAllSolutions.and.returnValue({ subscribe: () => {}});
    await TestBed.configureTestingModule({
      imports: [SolutionListComponent, NoopAnimationsModule],
      providers: [{ provide: WordlepalApiService, useValue: mockWordlepalApiService }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolutionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
