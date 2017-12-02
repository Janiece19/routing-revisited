import { Injectable } from '@angular/core';
import { Department } from '../shared/form-model'
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FormService {
  private _baseUrl = "http://localhost:4000/";

  constructor(private _http: HttpClient) {
  }
  getDepartment() {
    return this._http.get<Department[]>(this._baseUrl + "emp/departments")
      
  }
  saveDepartment(departments: Department) {
    return this._http.post<Department>(this._baseUrl + "emp/departments", departments)
      
  }
  updateDepartment(departments: Department) {
    return this._http.put<Department>(this._baseUrl + 'emp/departments', departments)
      

  }
  deleteDepartment(id: number) {
    return this._http.delete<number>(this._baseUrl + 'emp/departments/' + id)
     

  }
  getDeptment(id:number){
    return this.getDepartment().subscribe(dept=>dept.find(i=>i.id==id));

  }
}


