import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerNewspapersComponent } from './borrower-newspapers.component';

describe('BorrowerNewspapersComponent', () => {
  let component: BorrowerNewspapersComponent;
  let fixture: ComponentFixture<BorrowerNewspapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowerNewspapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerNewspapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
