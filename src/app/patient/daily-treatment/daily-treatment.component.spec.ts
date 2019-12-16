import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTreatmentComponent } from './daily-treatment.component';

describe('DailyTreatmentComponent', () => {
  let component: DailyTreatmentComponent;
  let fixture: ComponentFixture<DailyTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
