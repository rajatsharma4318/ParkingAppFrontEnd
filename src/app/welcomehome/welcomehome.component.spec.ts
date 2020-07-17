import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomehomeComponent } from './welcomehome.component';

describe('WelcomehomeComponent', () => {
  let component: WelcomehomeComponent;
  let fixture: ComponentFixture<WelcomehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
