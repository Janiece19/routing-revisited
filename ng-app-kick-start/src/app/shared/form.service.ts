import { Injectable } from '@angular/core';
import { Department } from '../shared/form-model';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FormService {

  private _baseUrl = "http://localhost:4000/";

  // department: Department[] = [
  //   { id: 1, name: 'HR' },
  //   { id: 2, name: 'Finance' },
  //   { id: 3, name: 'QA' }
  // ];

  constructor(private _http: Http) { }

  getDepartment() {
    return this._http.get(this._baseUrl + "emp/status")
      .toPromise()
      .then(data => data.json())
      .catch(error => console.error(error));
  }
  
  saveDepartment() {
    // return this._http.get(this._baseUrl + "emp/departments")
    //   .toPromise()
    //   .then(data => data.json())
    //   .catch(error => console.error(error));
  }

  // getStatus() {
  //   return;
  // }

  // getEmployeeDetails() {
  //   return;
  // }

  // getEmployee() {
  //   return;
  // }
}
