import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockHoldingsComponent } from './stock-holdings.component';

describe('StockHoldingsComponent', () => {
  let component: StockHoldingsComponent;
  let fixture: ComponentFixture<StockHoldingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockHoldingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockHoldingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
