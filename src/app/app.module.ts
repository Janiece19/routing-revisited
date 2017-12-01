import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormService } from './shared/form-service';
import { AppComponent } from './app.component';
//import { CrudComponent } from './component/crud/crud.component';
import { DepartmentComponent } from './component/department/department.component';
import { AddDepartmentComponent } from './component/department/add-department/add-department.component';
import { AppRoutingModule } from './/app-routing.module';
import { EditDeptComponent } from './edit-dept/edit-dept.component';

@NgModule({
  declarations: [
    AppComponent,
  //  CrudComponent,
    DepartmentComponent,
    AddDepartmentComponent,
    EditDeptComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
