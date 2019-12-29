import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementsTutorialComponent } from './measurements-tutorial.component';

describe('MeasurementsTutorialComponent', () => {
  let component: MeasurementsTutorialComponent;
  let fixture: ComponentFixture<MeasurementsTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementsTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementsTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
