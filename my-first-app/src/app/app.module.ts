import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuiltInPipeComponent } from './components/built-in-pipes/buit-in-pipe.component';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    BuiltInPipeComponent,
    AsyncPipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
