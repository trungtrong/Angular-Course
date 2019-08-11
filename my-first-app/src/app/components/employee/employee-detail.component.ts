import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2>Employee List</h2>
    <h3>{{ errorMsg }}</h3>
    <ul>
      <li *ngFor="let employee of employees">
        {{ employee.id}}. {{ employee.name }} - {{ employee.age }}
      </li>
    </ul>
  `
})

export class EmployeeDetailComponent implements OnInit {
  public employees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(
          data => {
            this.employees = data;
            // console.log(data);
          },
          error => this.errorMsg = error
        );
  }
}
