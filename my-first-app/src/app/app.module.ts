import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HightLightComponent } from './components/apply-hightlight-directive/hightlight.component';
import { HightlightDirective } from './hightlight.directive';
import { CardComponent } from './components/HostListener-and-HostBinding/card.component';
import { MultipleHightlightComponent } from './components/exercise01-multiple-hightlight/multiple-hightlight.component';
import { MultipleHightlightDirective } from './multiple-hightlight.directive';
import { RolloverImageComponent } from './components/exercise02-rollover-image/rollover-image.component';
import { RolloverImageDirective } from './rollover-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    HightLightComponent,
    HightlightDirective,
    CardComponent,
    MultipleHightlightComponent,
    MultipleHightlightDirective,
    RolloverImageComponent,
    RolloverImageDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
