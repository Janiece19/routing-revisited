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
import { Observable } from "rxjs/Observable";
import { MockHelper } from "../../stub";

// class empServiceMock {
//   getDepartment<T>() {
//     return Observable.of([{ id: 1, name: 'Hr' }, { id: 2, name: 'Sales' }, { id: 3, name: 'Marketing' }])
//   }
// }


fdescribe('DepartmentComponent', () => {
  let component: DepartmentComponent;
  let fixture: ComponentFixture<DepartmentComponent>;
  let router: Router;
  let formService: FormService;
  let mockHelper:MockHelper;
  //   let mockRouter = {
  // 	navigate: jasmine.createSpy('navigate')
  // }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentComponent, AddDepartmentComponent,
        EditDeptComponent,
        DepartmentDetailComponent,
      ],
      providers: [
        // { provide: Router, useValue: mockRouter},
        { provide: FormService, useClass: MockHelper },


      ], imports: [RouterTestingModule.withRoutes([]), FormsModule, HttpClientModule],
    })
      .compileComponents();
    router = TestBed.get(Router);
    formService = TestBed.get(FormService);
    mockHelper=new MockHelper();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call data from the server', () => {
    spyOn(formService, 'getDepartment').and.returnValue((mockHelper.getDepartment()))
    fixture.whenStable().then(() => {
      (component).loadDepartments();

      fixture.detectChanges();
      expect(formService.getDepartment).toHaveBeenCalledTimes(1);
    })

  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call loadDepartments on calling ', () => {
    spyOn(component,'loadDepartments');
   component.ngOnInit();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.loadDepartments).toHaveBeenCalledTimes(1);

      
    })
  })



  it('should navigate to addComponent', () => {
    let navigateSpy = spyOn((<any>component).router, 'navigate');
    component.showAddForm();
    expect(navigateSpy).toHaveBeenCalledWith(['/add']);
  });
  it('should navigate to editComponent', () => {
    let navigateSpy = spyOn((<any>component).router, 'navigate');
    let obj = { id: 1, name: 'finance' }
    component.editRow(obj);
    expect(navigateSpy).toHaveBeenCalledWith(['/edit', 1, 'finance']);
  });
  it('should navigate to departmentDetailComponent', () => {
    let navigateSpy = spyOn((<any>component).router, 'navigate');
    let obj = { id: 1, name: 'finance' }
    component.viewDetail(obj);
    expect(navigateSpy).toHaveBeenCalledWith(['/view-detail', { id: 1, name: 'finance', description: 'finance' + 'division' }]);
  });



  // xit('should call Router.navigateByUrl("forms/:id") with the ID of the form', () => {

  //              component.showAddForm();
  //              expect (mockRouter.navigate).toHaveBeenCalledWith (['/add']);



  //         });




});
