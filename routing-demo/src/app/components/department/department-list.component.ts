import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li (click)="onSelect(department)"
          *ngFor="let department of departments">
        <span class="badge">{{ department.id }}</span>
        {{ department.name }}
      </li>
    </ul>
  `,
  styleUrls: ['./department-list.component.css']
})

export class DepartmentListComponent implements OnInit {
  departments = [
    {id: 1, name: 'Angular'},
    {id: 2, name: 'Node'},
    {id: 3, name: 'Mongodb'},
    {id: 4, name: 'Ruby'},
    {id: 5, name: 'Boostrap'}
  ];

  // inject Router service
  constructor(private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit() { }

  // Passing parameters to routes in Angular
  onSelect(department) {
    // Way 1
    // this.router.navigate(['/departments', department.name.toLowerCase()]);

    // Way 2: relative navigation
    this.router.navigate([department.name.toLowerCase()], {relativeTo: this.route});
  }
}
