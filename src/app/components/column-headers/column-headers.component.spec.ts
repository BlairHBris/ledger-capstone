import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnHeadersComponent } from './column-headers.component';

describe('ColumnHeadersComponent', () => {
  let component: ColumnHeadersComponent;
  let fixture: ComponentFixture<ColumnHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnHeadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
