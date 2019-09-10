import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieVisualComponentComponent } from './movie-visual-component.component';

describe('MovieVisualComponentComponent', () => {
  let component: MovieVisualComponentComponent;
  let fixture: ComponentFixture<MovieVisualComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieVisualComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieVisualComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
