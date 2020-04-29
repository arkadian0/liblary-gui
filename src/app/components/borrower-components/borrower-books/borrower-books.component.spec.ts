import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerBooksComponent } from './borrower-books.component';

describe('BorrowerBooksComponent', () => {
  let component: BorrowerBooksComponent;
  let fixture: ComponentFixture<BorrowerBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowerBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
