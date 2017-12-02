import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, ParamMap } from "@angular/router";
import { FormService } from "../shared/form-service";
import 'rxjs/add/operator/switchMap';
import { Department } from "../shared/form-model";

@Component({
  selector: 'app-edit-dept',
  templateUrl: './edit-dept.component.html',
  styleUrls: ['./edit-dept.component.css']
})
export class EditDeptComponent implements OnInit {
  department=new Department();
  departmentName:string;


  constructor(private route:ActivatedRoute,private formService:FormService,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.switchMap((param:ParamMap)=>
      this.formService.getDeptment(+params['id'])).subscribe(data=>this.department=data);
    
  }
  updateDepartment() {
    // empObj.name = this.department.name;
    this.formService.updateDepartment(this.department).subscribe(
      (data) => {
         this.router.navigate(['/home']);
       
      },
      (error) => console.error(error)
    );
  }
  

   cancelForm() {
  this.router.navigate(['/home']);
  }

}
