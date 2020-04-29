import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowersListComponent } from './borrowers-list.component';

describe('BorrowersListComponent', () => {
  let component: BorrowersListComponent;
  let fixture: ComponentFixture<BorrowersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
