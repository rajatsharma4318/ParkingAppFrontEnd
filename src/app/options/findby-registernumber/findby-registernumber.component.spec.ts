import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbyRegisternumberComponent } from './findby-registernumber.component';

describe('FindbyRegisternumberComponent', () => {
  let component: FindbyRegisternumberComponent;
  let fixture: ComponentFixture<FindbyRegisternumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindbyRegisternumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbyRegisternumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
