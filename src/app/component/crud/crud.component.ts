// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// import { Department } from '../../shared/form-model'
// import { FormService } from '../../shared/form-service';

// @Component({
//   selector: 'app-crud',
//   templateUrl: './crud.component.html',
//   styleUrls: ['./crud.component.css']
// })
// export class CrudComponent implements OnInit {
//   ngAfterViewInit(): void {
//     // throw new Error("Method not implemented.");
//   }
//   ngOnInit(): void {
//    // this.loadDepartments();
//   }
// }
//   deptName:string;
//   deptId:number;
//   showAddPanel = false;
//   departments: Department[];
//   constructor(private _formService: FormService) {
//   }
//   AddDepartment(deptName: string) {
//     let empObj = new Department;
//     empObj.id = this.deptId;
//     empObj.name = deptName;
//     this._formService.saveDepartment(empObj).then(
//     (data)=>{this.loadDepartments();
//     this.clearForm()},
//      (error)=>console.error(error)
//       );
//    this.AddForm();
//   }
//   AddForm() {
//     this.showAddPanel = !this.showAddPanel;
//   }
//   deleteRow(id:number) {
//     this._formService.deleteDepartment(id).then(
//       (data)=>{
//         alert('Department Delete SuccessFully');
//         this.loadDepartments();
//       },(error=>console.error(error))
//     );
//   }
//   editRow(departments:Department){
//     this.AddForm();
//     this.deptName = departments.name;
//     this.deptId = departments.id;
//   }
//   showAddForm(){
//     this.AddForm();
//     this.deptId=0;
//   }
//   updateDepartment(deptName){
//    let empObj=new Department;
//   empObj.id=this.deptId;
//   empObj.name=this.deptName;
//     this._formService.updateDepartment(empObj).then(
//       (data)=>{
//         this.AddForm();
//         this.loadDepartments();
//        this.clearForm();
//       },
//       (error)=>console.error(error)
//     ); 
//   }
//   private loadDepartments() {
//     this._formService.getDepartment().then(
//       (data) => this.departments = data,
//       (error) => console.error(error)
//     );
//   }
//   clearForm(){
//     this.deptId=undefined;
//     this.deptName=undefined;
//   }
// }