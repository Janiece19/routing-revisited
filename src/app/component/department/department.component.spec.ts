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
import { By } from "@angular/platform-browser/";

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
  let mockHelper: MockHelper;
    let mockRouter = {
  	navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentComponent, AddDepartmentComponent,
        EditDeptComponent,
        DepartmentDetailComponent,
      ],
      providers: [
        { provide: Router, useValue: mockRouter},
        { provide: FormService, useClass: MockHelper },


      ], imports: [ FormsModule, HttpClientModule],
    })
      .compileComponents();
    router = TestBed.get(Router);
    formService = TestBed.get(FormService);
    mockHelper = new MockHelper();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should call data from the server', () => {
    spyOn(formService, 'getDepartment').and.returnValue(Observable.of(mockHelper.getDepartment()))
    fixture.whenStable().then(() => {
      (component).loadDepartments();

      fixture.detectChanges();
      expect(formService.getDepartment).toHaveBeenCalledTimes(1);
    })

  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  //   fit('should not display table before calling ngOninit()',()=>{
  //   let table=fixture.debugElement.queryAll(By.css('tr'))
  //   expect(table.length).toBe(0);
  // })

  it('should display table on calling ngOninit()',()=>{
    component.ngOnInit();
    fixture.whenStable().then(()=>{
      fixture.detectChanges();
    let table=fixture.debugElement.queryAll(By.css('tr'))
    expect(table.length).toBe(4);
    })
  })

  it('should call daleteDepartment with repective id',()=>{
    spyOn(formService,'deleteDepartment').and.returnValue(Observable.of(mockHelper.deleteDepartment(3)));
    spyOn(component,'loadDepartments');
    component.deleteRow(3);
    
      
    expect(formService.deleteDepartment).toHaveBeenCalledTimes(1);
    expect(formService.deleteDepartment).toHaveBeenCalledWith(3);
    expect(component.loadDepartments).toHaveBeenCalledTimes(1);
    
    
    
  
  })
  
  fit('should have mockdata when daleteDepartment with repective id is called',()=>{
   
    component.deleteRow(3);
   expect(component.departments.length).toBe(3);
  //  expect(mockHelper.Departments.length).toBe(3);
  expect(component.departments).toEqual([
    {id:1,name:'Hr'},
    {id:2,name:'Finance'},
    {id:4,name:'Marketing'},
    ])

  
     
      
 })




  it('should call loadDepartments on calling ', () => {
    spyOn(component, 'loadDepartments');
    component.ngOnInit();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.loadDepartments).toHaveBeenCalledTimes(1);


    })
  })

it('should render title in a h1 tag', async(() => {
    
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Department');
  }));


  it('should navigate to addComponent', () => {
    // let navigateSpy = spyOn((<any>component).router, 'navigate');
    component.showAddForm();
    expect(router.navigate).toHaveBeenCalledWith(['/add']);
  });
  it('should navigate to editComponent', () => {
    // let navigateSpy = spyOn((<any>component).router, 'navigate');
    let obj = { id: 1, name: 'finance' }
    component.editRow(obj);
    expect(router.navigate).toHaveBeenCalledWith(['/edit', 1]);
  });
  it('should navigate to departmentDetailComponent', () => {
    // let navigateSpy = spyOn((<any>component).router, 'navigate');
    let obj = { id: 1, name: 'finance' }
    component.viewDetail(obj);
    expect(router.navigate).toHaveBeenCalledWith(['/view-detail', { id: 1, name: 'finance', description: 'finance' + 'division' }]);
  });

   fit('should throw error when router is undefined',()=>{
    spyOn(console,'error');
    (<any>component).router=undefined;
    component.showAddForm();
    expect(console.error).toHaveBeenCalledWith(new TypeError("Cannot read property 'navigate' of undefined"));
    
   })



  



});
