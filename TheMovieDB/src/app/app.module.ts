import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { MovieDataComponentComponent } from './movie-data-component/movie-data-component.component';
import { MovieVisualComponentComponent } from './movie-visual-component/movie-visual-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterBarComponent,
    MovieDataComponentComponent,
    MovieVisualComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
