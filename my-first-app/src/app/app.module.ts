import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee/employee-list.component';
import { EmployeeDetailComponent } from './components/employee/employee-detail.component';

import { CatComponent } from './components/communicate-between-2-strange-components/cat.component';
import { DogComponent } from './components/communicate-between-2-strange-components/dog.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    CatComponent,
    DogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
