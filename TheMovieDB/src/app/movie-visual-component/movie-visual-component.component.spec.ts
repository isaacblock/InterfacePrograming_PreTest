import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieVisualComponent } from './movie-visual-component.component';

describe('MovieVisualComponent', () => {
  let component: MovieVisualComponent;
  let fixture: ComponentFixture<MovieVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieVisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
