import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Department } from '../../shared/form-model'
import { FormService } from '../../shared/form-service';
import { Router } from "@angular/router";
import { AddDepartmentComponent } from "./add-department/add-department.component";
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  ngOnInit(): void {
   this.loadDepartments();
  }
  department: Department = new Department();
  // showAddPanel = false;
  departments: Department[];
  add='';
  constructor(private _formService: FormService,private router:Router) { }
  // AddForm() {
  //   this.showAddPanel = !this.showAddPanel;
  // }
  ngAfterViewInit(){
    console.log('hii view');
  }

  deleteRow(id: number) {
    this._formService.deleteDepartment(id).then(
      (data) => {
       // alert('Department Delete SuccessFully');
        this.loadDepartments();
      }, (error => console.error(error))
    );
  }
  editRow(departments: Department) {
    this.router.navigate(['/edit', departments.id]);
    //  this.AddForm();
    // this.department.name = departments.name;
    // this.department.id = departments.id;
  }
  showAddForm() {
    //  this.AddForm();
    this.department = new Department();
    this.department.id = 0;
     this.router.navigate(['/add'])
  }
  private loadDepartments() {
    this._formService.getDepartment().then(
      (data) => this.departments = data,
      (error) => console.error(error)
    );
  }
viewDetail(department){
  this.router.navigate(['/view-detail',{id:department.id,name:department.name}])
}
}



