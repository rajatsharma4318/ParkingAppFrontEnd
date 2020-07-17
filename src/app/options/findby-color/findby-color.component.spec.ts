import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbyColorComponent } from './findby-color.component';

describe('FindbyColorComponent', () => {
  let component: FindbyColorComponent;
  let fixture: ComponentFixture<FindbyColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindbyColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbyColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
