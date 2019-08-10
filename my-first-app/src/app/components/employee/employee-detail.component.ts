import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2>Employee List</h2>
    <ul>
      <li *ngFor="let employee of employees">
        {{ employee.id}}.{{ employee.name }}-{{ employee.age }}
      </li>
    </ul>
  `
})

export class EmployeeDetailComponent implements OnInit {
  public employees = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployee();
  }
}
