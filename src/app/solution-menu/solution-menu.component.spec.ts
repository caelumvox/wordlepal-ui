import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionMenuComponent } from './solution-menu.component';

describe('SolutionMenuComponent', () => {
  let component: SolutionMenuComponent;
  let fixture: ComponentFixture<SolutionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolutionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render menu', () => {
    const fixture = TestBed.createComponent(SolutionMenuComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('I want to...');
  });
});
