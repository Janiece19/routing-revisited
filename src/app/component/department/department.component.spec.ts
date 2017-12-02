import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentComponent } from './department.component';
import { Router } from "@angular/router";
import { FormService } from "../../shared/form-service";
import { Http } from '@angular/http';
import { routes } from "../../app-routing.module";
import { RouterTestingModule } from "@angular/router/testing";
import { AddDepartmentComponent } from "./add-department/add-department.component";
import { EditDeptComponent } from "../../edit-dept/edit-dept.component";
import { DepartmentDetailComponent } from "../../department-detail/department-detail.component";
import { FormsModule } from "@angular/forms";

fdescribe('DepartmentComponent', () => {
  let component: DepartmentComponent;
  let fixture: ComponentFixture<DepartmentComponent>;
  let router: Router;
  let formService:FormService;
  let mockRouter = {
	navigate: jasmine.createSpy('navigate')
}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentComponent,AddDepartmentComponent,
    EditDeptComponent,
    DepartmentDetailComponent,
 ],
      	providers: [
		{ provide: Router, useValue: mockRouter},
		
    FormService,Http
	], imports: [RouterTestingModule.withRoutes(routes),FormsModule], 
    })
    .compileComponents();
     router = TestBed.get(Router); 
     formService=TestBed.get(FormService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

fit('should call Router.navigateByUrl("forms/:id") with the ID of the form', () => {
            const spy = spyOn(router, 'navigate');

            component.showAddForm();

            const url = spy.calls.first().args[0];

            expect(url).toBe('/add');
        });


});
