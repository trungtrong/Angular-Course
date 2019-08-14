import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DepartmentListComponent } from './components/department/department-list.component';
import { DepartmentDetailComponent } from './components/department/department-detail.component';

const routes: Routes = [
  { path: '',  redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'departments', component: DepartmentListComponent},
  { path: 'departments/:name', component: DepartmentDetailComponent},
  { path: 'search', component: SearchComponent },
  { path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [HomeComponent,
                                  SearchComponent,
                                  PageNotFoundComponent,
                                  DepartmentListComponent,
                                  DepartmentDetailComponent];
