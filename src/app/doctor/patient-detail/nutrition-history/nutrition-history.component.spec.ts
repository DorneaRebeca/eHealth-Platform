import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionHistoryComponent } from './nutrition-history.component';

describe('NutritionHistoryComponent', () => {
  let component: NutritionHistoryComponent;
  let fixture: ComponentFixture<NutritionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
