import { Observable } from "rxjs/Observable";
import { Department } from "./shared/form-model";
import 'rxjs/add/observable/of';

export class MockHelper {
       getDepartment() {
    return Observable.of(this.Departments);
      
  }
   saveDepartment(departments: Department) {
     this.Departments.push(departments);
    return Observable.of(this.Departments);
      
  }
   updateDepartment(departments: Department) {
    return Observable.of(this.Departments);
      

  }
   deleteDepartment(id: number) {
      let result=(this. Departments.filter((item) => item.id != id));
      this.Departments=result;

     return Observable.of(this.Departments);
     

  }
  getDeptment(id:number){
    return Observable.of({id:2,name:'Sales'});

  }


  Departments=[
  {id:1,name:'Hr'},
  {id:2,name:'Finance'},
  {id:3,name:'sales'},
  {id:4,name:'Marketing'},
  ]
}