import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Department } from '../../shared/form-model'
import { FormService } from '../../shared/form-service';
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
  showAddPanel = false;
  departments: Department[];
  add='';
  constructor(private _formService: FormService) { }
  AddForm() {
    this.showAddPanel = !this.showAddPanel;
  }
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
    this.AddForm();
    this.department.name = departments.name;
    this.department.id = departments.id;
  }
  showAddForm() {
    this.AddForm();
    this.department = new Department();
    this.department.id = 0;
  }
  private loadDepartments() {
    this._formService.getDepartment().then(
      (data) => this.departments = data,
      (error) => console.error(error)
    );
  }
  formClose(event) {
    if (event) {
      this.AddForm();
      this.loadDepartments();
    }
  }
}



