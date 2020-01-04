import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartHeartRateComponent } from './chart-heart-rate.component';

describe('ChartHeartRateComponent', () => {
  let component: ChartHeartRateComponent;
  let fixture: ComponentFixture<ChartHeartRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartHeartRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartHeartRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
