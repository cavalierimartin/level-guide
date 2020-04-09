import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelLineComponent } from './level-line.component';

describe('LevelLineComponent', () => {
  let component: LevelLineComponent;
  let fixture: ComponentFixture<LevelLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
