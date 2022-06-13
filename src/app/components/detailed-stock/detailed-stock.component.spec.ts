import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedStockComponent } from './detailed-stock.component';

describe('DetailedStockComponent', () => {
  let component: DetailedStockComponent;
  let fixture: ComponentFixture<DetailedStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
