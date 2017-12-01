import { Injectable } from '@angular/core';
import { Department } from '../shared/form-model'
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FormService {
  private _baseUrl = "http://localhost:4000/";

  constructor(private _http: Http) {
  }
  getDepartment() {
    return this._http.get(this._baseUrl + "emp/departments")
      .toPromise()
      .then(data => data.json())
      .catch(error => console.error(error));
  }
  saveDepartment(departments: Department) {
    return this._http.post(this._baseUrl + "emp/departments", departments)
      .toPromise()
      .then(data => data.json())
      .catch(error => console.error(error));
  }
  updateDepartment(departments: Department) {
    return this._http.put(this._baseUrl + 'emp/departments', departments)
      .toPromise()
      .then(data => data.json())
      .catch(error => console.error(error));

  }
  deleteDepartment(id: number) {
    return this._http.delete(this._baseUrl + 'emp/departments/' + id)
      .toPromise()
      .then(data => data.json())
      .catch(error => console.error(error));

  }
}


