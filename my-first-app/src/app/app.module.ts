import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee/employee-list.component';
import { EmployeeDetailComponent } from './components/employee/employee-detail.component';
import { from } from 'rxjs';
import { ChildComponent } from './components/exercise/child.component';
import { ParentComponent } from './components/exercise/parent.component';
import { SimpleService } from './components/exercise/simple-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
