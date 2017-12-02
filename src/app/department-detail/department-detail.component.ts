import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, Params } from '@angular/router';
import { Department } from '../shared/form-model';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  department = new Department();
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.department.id = parseInt(param['id']);
      this.department.name = (param['name']);

    })

  }


}
