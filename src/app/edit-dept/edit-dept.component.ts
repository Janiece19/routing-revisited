import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, ParamMap } from "@angular/router";
import { FormService } from "../shared/form-service";
import 'rxjs/add/operator/switchMap';
import { Department } from "../shared/form-model";
import { ArrayHelper } from '../array-helper';

@Component({
  selector: 'app-edit-dept',
  templateUrl: './edit-dept.component.html',
  styleUrls: ['./edit-dept.component.css']
})
export class EditDeptComponent implements OnInit {
  helper=new ArrayHelper();
  department=new Department();
  departmentName:string;
  id:number;


  constructor(private route:ActivatedRoute,private formService:FormService,private router:Router) { }

  ngOnInit() {
   try{
    this.route.params.switchMap((param:Params)=>
      this.formService.getDeptment(+param['id'])).subscribe(data=>this.department=data);
   }
   catch(error)
   {
     console.error(error);
   }
// this.department.id=+this.route.snapshot.params['id'];
// this.department.name=this.route.snapshot.params['name'];
          }  


updateDepartment() {
  if(this.department.name=='undefined'||this.department.name==''||this.department.name=='null'||this.department.name==undefined||this.department.name==null)
  throw new Error('Invalid input');
   
try{
    this.formService.updateDepartment(this.department).subscribe(
      (data) => {
         this.router.navigate(['/home']);
       
      },
      (error) => console.error(error)
    );
  }

catch(error){
console.error(error);
}
}
  

   cancelForm() {
     try{
  this.router.navigate(['/home']);

     }
     catch(error){
       console.error(error);
     }
  }

}
