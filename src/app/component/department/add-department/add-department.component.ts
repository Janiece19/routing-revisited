import { Component, OnInit, Input, Output, EventEmitter,OnChanges,SimpleChanges } from '@angular/core';
import { Department } from '../../../shared/form-model';
import { FormService } from '../../../shared/form-service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit{
  @Input('dept') department: Department;
  //@Input() title:string;
 ngOnChanges(changes:SimpleChanges):void{

 }
  title:string;
  @Input()
set Title(name){
   this.title = name +"Department";
 }
get(){
   return this.title;
 }
  @Output() deptOutputEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private _formService: FormService) { }

  AddDepartment(deptName: string) {
    let empObj = new Department;
    empObj.id = this.department.id;
    empObj.name = this.department.name;
    this._formService.saveDepartment(empObj).then(
      (data) => {
       this.deptOutputEvent.emit(true);
        this.clearForm()
      },
      (error) => console.error(error)
    );
  }
  updateDepartment(deptName) {
    let empObj = new Department;
    empObj.id = this.department.id;  
    empObj.name = this.department.name;
    this._formService.updateDepartment(empObj).then(
      (data) => {
        this.deptOutputEvent.emit(true);
        this.clearForm();
      },
      (error) => console.error(error)
    );
  }
  ngOnInit() {
    console.log(this.department);
  }
  clearForm() {
   this.department = new Department();
   //this.department.id=undefined;
   //this.department.name=undefined;
  }
}
