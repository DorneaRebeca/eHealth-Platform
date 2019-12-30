import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydrugsComponent } from './mydrugs.component';

describe('MydrugsComponent', () => {
  let component: MydrugsComponent;
  let fixture: ComponentFixture<MydrugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydrugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
