import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>Department {{ departmentName }}</h3>

  `
})

export class DepartmentDetailComponent implements OnInit {
  public departmentName;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.departmentName = this.route.snapshot.paramMap.get('name');
  }
}
