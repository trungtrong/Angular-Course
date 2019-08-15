import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>Department {{ departmentName }}</h3>

    <div>
      <button (click)="goBack()">Back</button>
    </div>

  `
})

export class DepartmentDetailComponent implements OnInit {
  public departmentName;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.departmentName = this.route.snapshot.paramMap.get('name');
  }

  goBack() {
    // way 1
    // this.router.navigate(['/departments']);

    // way 2 : relative navigation
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
