import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDataComponentComponent } from './movie-data-component.component';

describe('MovieDataComponentComponent', () => {
  let component: MovieDataComponentComponent;
  let fixture: ComponentFixture<MovieDataComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDataComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
