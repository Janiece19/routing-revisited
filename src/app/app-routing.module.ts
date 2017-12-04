import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from "./component/department/add-department/add-department.component";
import { DepartmentComponent } from "./component/department/department.component";
import { EditDeptComponent } from "./edit-dept/edit-dept.component";
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DepartmentComponent },
  { path: 'add', component: AddDepartmentComponent },
  { path: 'edit/:id/:name', component: EditDeptComponent },
  { path: 'view-detail', component: DepartmentDetailComponent },
  // { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,
      { enableTracing: true })
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
