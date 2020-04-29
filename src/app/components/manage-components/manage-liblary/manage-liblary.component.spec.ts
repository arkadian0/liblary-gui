import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLiblaryComponent } from './manage-liblary.component';

describe('ManageLiblaryComponent', () => {
  let component: ManageLiblaryComponent;
  let fixture: ComponentFixture<ManageLiblaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLiblaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLiblaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
