import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedToPrescriptionComponent } from './add-med-to-prescription.component';

describe('AddMedToPrescriptionComponent', () => {
  let component: AddMedToPrescriptionComponent;
  let fixture: ComponentFixture<AddMedToPrescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMedToPrescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedToPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
