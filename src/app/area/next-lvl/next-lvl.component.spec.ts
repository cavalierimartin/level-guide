import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextLvlComponent } from './next-lvl.component';

describe('NextLvlComponent', () => {
  let component: NextLvlComponent;
  let fixture: ComponentFixture<NextLvlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextLvlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextLvlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
