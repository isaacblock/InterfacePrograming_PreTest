import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-data-component',
  templateUrl: './movie-data-component.component.html',
  styleUrls: ['./movie-data-component.component.css']
})

export class MovieDataComponentComponent implements OnInit {

  @Input() Title: string;
  @Input() Rating: number;
  @Input() ShortDescription: string;
  @Input() RunTime: number;
  @Input() ReleaseDate: Date;
  @Input() MovieImage: string;
  
  constructor() { }

  ngOnInit() {
  }
}