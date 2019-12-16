import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskformoreComponent } from './askformore.component';

describe('AskformoreComponent', () => {
  let component: AskformoreComponent;
  let fixture: ComponentFixture<AskformoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskformoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskformoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
