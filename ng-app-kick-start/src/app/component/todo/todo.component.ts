import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Department } from '../../shared/form-model'
import { Employee } from '../../shared/form-interface';
import { FormService } from '../../shared/form.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, AfterViewInit {
  
  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }
  
  ngOnInit(): void {
    this.loadDepartments();
  }

  todoList: string[] = ['Complete Angular assignment', 'Shopping'];
  departments: Array<Department>;
  componentName = 'My Todo app';
  message = '';
  selectRow: (deptObj: { id: number, name: string }) => void;

  constructor(private _formService: FormService) {

    let that = this;
    // let formService = new FormService();
    // this.departments = formService.department;
    // this.departments = _formService.department;

    this.selectRow = (deptObj: { id: number, name: string }) => {
      console.log('Selected Row Id is ' + JSON.stringify(deptObj));
    };

  }

  private loadDepartments() {
    this._formService.getDepartment().then(
      (data) => this.departments = data,
      (error) => console.error(error)
    );
  }

  getMessage(message: string) {
    alert(message);
  }

  deleteRow(id: number) {
    this.departments = this.departments.filter((dept) => dept.id !== id);
  }


}
