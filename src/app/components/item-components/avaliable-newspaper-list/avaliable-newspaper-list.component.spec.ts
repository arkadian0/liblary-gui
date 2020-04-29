import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliableNewspaperListComponent } from './avaliable-newspaper-list.component';

describe('AvaliableNewspaperListComponent', () => {
  let component: AvaliableNewspaperListComponent;
  let fixture: ComponentFixture<AvaliableNewspaperListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliableNewspaperListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliableNewspaperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
