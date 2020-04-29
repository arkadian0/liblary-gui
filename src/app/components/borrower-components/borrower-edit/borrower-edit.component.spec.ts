import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerEditComponent } from './borrower-edit.component';

describe('BorrowerEditComponent', () => {
  let component: BorrowerEditComponent;
  let fixture: ComponentFixture<BorrowerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
