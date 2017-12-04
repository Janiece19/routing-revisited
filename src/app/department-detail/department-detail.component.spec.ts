import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDetailComponent } from './department-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { FormService } from '../shared/form-service';
import { Router } from "@angular/router";

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
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentDetailComponent ],
      imports:[FormsModule,HttpClientModule,RouterTestingModule.withRoutes([])],
      providers:[{provide:FormService,useClass:empServiceMock}]
    })
    .compileComponents();
     router = TestBed.get(Router); 
     formService=TestBed.get(FormService);
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

  it('should get data from the service',()=>{
    
  })
});
