import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, Params } from '@angular/router';
import { Department } from '../shared/form-model';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  selectedDescrption:string;
  department = new Department();
  constructor(private route: ActivatedRoute, private router: Router,private location:Location) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.department.id = parseInt(param['id']);
      this.department.name = (param['name']);
this.selectedDescrption=param['description'];

    })

  }
  goBack(){
    this.location.back();
  }


}
