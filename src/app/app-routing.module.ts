import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from  '@angular/router';
import { AddDepartmentComponent } from "./component/department/add-department/add-department.component";
import { DepartmentComponent } from "./component/department/department.component";
import { EditDeptComponent } from "./edit-dept/edit-dept.component";

const routes: Routes = [
	  { path: '', redirectTo: '/home', pathMatch: 'full' },
   {path:'home', component:DepartmentComponent},
	 { path: 'add', component: AddDepartmentComponent },
	 { path: 'edit/:id', component: EditDeptComponent },
	// { path: 'update-book/:id', component: UpdateBookComponent }, 
	// { path: '**', component: PageNotFoundComponent }
] 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,
    { enableTracing: true } )
  ],
  
  exports:[RouterModule]
})
export class AppRoutingModule { }
