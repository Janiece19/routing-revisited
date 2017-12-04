import { Component, OnInit, Input, Output, EventEmitter,OnChanges,SimpleChanges } from '@angular/core';
import { Department } from '../../../shared/form-model';
import { FormService } from '../../../shared/form-service';
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit{
  public departmentId;
  departmentName:string;
   department: Department=new Department();
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
 
  constructor(private _formService: FormService,private router:Router) { }

  AddDepartment() {
    // let empObj = new Department;
    //  empObj.id = this.department.id;
    // empObj.name = this.department.name;
    this._formService.saveDepartment(this.department).subscribe(
      (data) => {
         this.router.navigate(['/home']);
       
      },
      (error) => console.error(error)
    );
  }
 
  ngOnInit() {
    console.log();
    
  }
  cancelForm() {
  this.router.navigate(['/home']);
  }
}
