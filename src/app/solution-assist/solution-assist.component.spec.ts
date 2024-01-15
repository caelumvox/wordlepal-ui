import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionAssistComponent } from './solution-assist.component';

describe('SolutionAssistComponent', () => {
  let component: SolutionAssistComponent;
  let fixture: ComponentFixture<SolutionAssistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionAssistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolutionAssistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
