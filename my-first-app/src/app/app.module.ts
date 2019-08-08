import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuiltInPipeComponent } from './components/built-in-pipes/buit-in-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    BuiltInPipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
