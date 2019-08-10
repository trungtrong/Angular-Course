import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee List</h2>
    <ul>
      <li *ngFor="let employee of employees">
        {{ employee.name }}
      </li>
    </ul>
  `
})

export class EmployeeListComponent implements OnInit {
  public employees = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data);
  }

}
