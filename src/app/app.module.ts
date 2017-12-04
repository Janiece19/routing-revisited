import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { FormService } from './shared/form-service';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './component/department/department.component';
import { AddDepartmentComponent } from './component/department/add-department/add-department.component';
import { AppRoutingModule } from './/app-routing.module';
import { EditDeptComponent } from './edit-dept/edit-dept.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    AddDepartmentComponent,
    EditDeptComponent,
    DepartmentDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
