import { Observable } from "rxjs/Observable";
import { Department } from "./shared/form-model";

export class MockHelper {
       getDepartment() {
    return Observable.of([{id:1,name:'Hr'}, {id:2,name:'Sales'},{id:3,name:'Marketing'}])
      
  }
   saveDepartment(departments: Department) {
    return Observable.of([{id:1,name:'Hr'}, {id:2,name:'Sales'},{id:3,name:'Marketing'}])
      
  }
   updateDepartment(departments: Department) {
    return Observable.of([{id:1,name:'Hr'}, {id:2,name:'Sales'},{id:3,name:'Marketing'}])
      

  }
   deleteDepartment(id: number) {
    return Observable.of([{id:1,name:'Hr'}, {id:2,name:'Sales'},{id:3,name:'Marketing'}])
     

  }
  getDeptment(id:number){
    return Observable.of({id:2,name:'Sales'});

  }
}