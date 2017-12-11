import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDetailComponent } from './department-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { FormService } from '../shared/form-service';
import { Router, ActivatedRoute } from "@angular/router";
import { MockHelper } from "../stub";
import { Observable } from "rxjs/Observable";

class empServiceMock{
  getDepartment<T>(){
return [{id:1,name:'Hr'}, {id:2,name:'Sales'},{id:3,name:'Marketing'}]
  }
}

describe('DepartmentDetailComponent', () => {
  let component: DepartmentDetailComponent;
  let fixture: ComponentFixture<DepartmentDetailComponent>;
 let router: Router;
  let formService:FormService;
   let activatedRoute: ActivatedRoute;
   let mockHelper:MockHelper;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentDetailComponent ],
      imports:[FormsModule,HttpClientModule,RouterTestingModule.withRoutes([])],//RouterTestingModule is not reqd
      providers:[{provide:FormService,useClass:MockHelper},
      { provide: ActivatedRoute, useValue: { params: Observable.of({ id: undefined,name:'Hr',description:'Hr'+'division' }) } }]
    })
    .compileComponents();
     router = TestBed.get(Router); 
     formService=TestBed.get(FormService);
     activatedRoute = TestBed.get(ActivatedRoute);
    mockHelper = new MockHelper();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate to addComponent',()=>{
    let navigateSpy=spyOn((<any>component).router,'navigate');
  })

  it('should call getdeptment with url id on calling ngOnInit',()=>{
  // spyOn(<any>formService,'getDeptment').and.returnValue(Promise.resolve({id:1,name:'Hr'}));
  component.ngOnInit();
  expect(component.department.id).toEqual(4);
  expect(component.department.name).toEqual('Hr');
  expect(component.selectedDescrption).toEqual('Hr'+'division');
});


it('should throw error when activatedroute is undefined',()=>{
    spyOn(console,'error');
    (<any>component).route=undefined;
    component.ngOnInit();
    expect(console.error).toHaveBeenCalledWith(new TypeError("Cannot read property 'params' of undefined"));
    
   })
fit('should throw error when params are undefined',()=>{
  spyOn(console,'error')
  component.ngOnInit();
  expect(console.error).toHaveBeenCalledWith(new TypeError('Invalid parameters'));

})
fit('shoud call method inside goBack()',()=>{
  spyOn((<any>component).location,'back');
  component.goBack();
   expect((<any>component).location.back).toHaveBeenCalled();
})

    
});
