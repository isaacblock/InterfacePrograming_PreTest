import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-visual-component',
  templateUrl: './movie-visual-component.component.html',
  styleUrls: ['./movie-visual-component.component.css']
})

export class MovieVisualComponentComponent implements OnInit {

  @Input() url: string;
  constructor() { }

  ngOnInit() {
  }

}
