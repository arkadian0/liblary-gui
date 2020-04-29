import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBorrowerComponent } from './delete-borrower.component';

describe('DeleteBorrowerComponent', () => {
  let component: DeleteBorrowerComponent;
  let fixture: ComponentFixture<DeleteBorrowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBorrowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBorrowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
