import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgForExampleComponent } from './components/ngFor/ngFor-example.component';
import { NgForIndexComponent } from './components/ngFor/ngFor-index.component';
import { NgForGroupComponent } from './components/ngFor/ngFor-grouped.component';
import { NgIfExampleComponent } from './components/ngIf/ngIf-example.component';
import { NgSwitchExampleComponent } from './components/ngSwitch/ngSwitch-example.component';
import { WithoutNgModelComponent } from './components/ngModel/without-ngModel.component';

import { FormsModule } from '@angular/forms';
import { NgModelExampleComponent } from './components/ngModel/ngModel.component';
import { Exercise01Component } from './components/exercise/exercise_01.component';

@NgModule({
  declarations: [
    AppComponent,
    NgForExampleComponent,
    NgForIndexComponent,
    NgForGroupComponent,
    NgIfExampleComponent,
    NgSwitchExampleComponent,

    WithoutNgModelComponent,
    NgModelExampleComponent,

    Exercise01Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
