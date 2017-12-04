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

  departments: Department[];
  add='';
  constructor(private _formService: FormService,private router:Router) { }
  
 

  deleteRow(id: number) {
    this._formService.deleteDepartment(id).subscribe(
      (data) => {
      
        this.loadDepartments();
      }, (error => console.error(error))
    );
  }
  editRow(departments: Department) {
    this.router.navigate(['/edit', departments.id,departments.name]);
   
  }
  showAddForm() {
     this.router.navigate(['/add'])
  }
    
   
    loadDepartments() {
    this._formService.getDepartment().subscribe(
      (data) => this.departments = data,
      (error) => console.error(error)
    );
  }
viewDetail(department){
  this.router.navigate(['/view-detail',{id:department.id,name:department.name,description:department.name+'division'}])
}
}



