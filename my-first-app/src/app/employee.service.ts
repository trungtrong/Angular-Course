import { Injectable, OnChanges, Inject } from '@angular/core';
import { OtherEmployeeService } from './other-employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees = [
    {id: 1, name: 'Trong', age: 24},
    {id: 2, name: 'Kim', age: 30},
    {id: 3, name: 'Long', age: 14},
    {id: 4, name: 'Tuan', age: 26}
  ];

  // inject a dependency into service
  _otherEmployeeService: OtherEmployeeService;

  constructor( _otherEmployeeService: OtherEmployeeService) {
    this._otherEmployeeService = _otherEmployeeService;
  }

  getEmployee() {
    return this.employees;
  }

}
