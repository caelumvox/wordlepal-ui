import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionAddComponent } from './solution-add.component';
import { WordlepalApiService } from '../services/wordlepal-api.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import moment from 'moment';

describe('SolutionAddComponent', () => {
  let component: SolutionAddComponent;
  let fixture: ComponentFixture<SolutionAddComponent>;

  beforeEach(async () => {
    const mockWordlepalApiService = jasmine.createSpyObj(['addSolution']);
    await TestBed.configureTestingModule({
      imports: [SolutionAddComponent, NoopAnimationsModule],
      providers: [{ provide: WordlepalApiService, useValue: mockWordlepalApiService }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolutionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a valid solution', () => {
    component.words = 'ALIVE';
    component.date = moment('2021-01-01');
    expect(component.submitSolution());
  });

  it('should validate a valid, five-letter solution', () => {
    expect(() => { component.validateWords(['ALIVE'])});
  });

  it('should validate a valid, list of five-letter solutions', () => {
    expect(() => { component.validateWords(['ALIVE', 'RANGE'])});
  });

  it('should throw if an invalid value for a word is detected', () => {
    expect(() => { component.validateWords(['GRAY'])}).toThrowError('Invalid word');
  });

  it('should throw if an invalid value if one in a handful of words is detected', () => {
    expect(() => { component.validateWords(['GRAPE', 'ar12', 'CLOVE'])}).toThrowError('Invalid word');
  });

  it('should add a valid solution', () => {
    component.words = 'ALIVE';
    component.date = moment('2021-01-01');
    expect(component.submitSolution());
  });
});
