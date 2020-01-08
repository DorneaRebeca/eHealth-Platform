import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBloodSugarComponent } from './chart-blood-sugar.component';

describe('ChartBloodSugarComponent', () => {
  let component: ChartBloodSugarComponent;
  let fixture: ComponentFixture<ChartBloodSugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartBloodSugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBloodSugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
