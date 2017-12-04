import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentComponent } from './department.component';
import { Router } from "@angular/router";
import { FormService } from "../../shared/form-service";
import { HttpClientModule } from '@angular/common/http';
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
//   let mockRouter = {
// 	navigate: jasmine.createSpy('navigate')
// }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentComponent,AddDepartmentComponent,
    EditDeptComponent,
    DepartmentDetailComponent,
 ],
      	providers: [
		// { provide: Router, useValue: mockRouter},
		
    FormService
	], imports: [RouterTestingModule.withRoutes([]),FormsModule,HttpClientModule], 
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

// xit('should call Router.navigateByUrl("forms/:id") with the ID of the form', () => {
           
//              component.showAddForm();
//              expect (mockRouter.navigate).toHaveBeenCalledWith (['/add']);

            
            
//         });


        fit('should navigate to addComponent', () => {
          let navigateSpy = spyOn((<any>component).router, 'navigate');
          component.showAddForm();
          expect(navigateSpy).toHaveBeenCalledWith(['/add']);
      });
      fit('should navigate to editComponent', () => {
          let navigateSpy = spyOn((<any>component).router, 'navigate');
          let obj={id:1,name:'finance'}
          component.editRow(obj) ;
          expect(navigateSpy).toHaveBeenCalledWith( ['/edit', 1, 'finance' ] );
      });
      fit('should navigate to departmentDetailComponent', () => {
        let navigateSpy = spyOn((<any>component).router, 'navigate');
        let obj={id:1,name:'finance'}
        component.viewDetail(obj) ;
        expect(navigateSpy).toHaveBeenCalledWith( ['/view-detail', {id:1, name:'finance',description:'finance'+'division' }]);
      });

});
