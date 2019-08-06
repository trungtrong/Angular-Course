import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeListComponent } from './components/jokeList/jokeList.component';
import { JokeComponent } from './components/joke/joke.component';
import { JokeParentComponent } from './components/joke-parent/joke-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeParentComponent,
    JokeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
