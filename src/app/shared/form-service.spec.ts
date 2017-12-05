import { TestBed, inject } from '@angular/core/testing';
import { FormService } from './form-service';
import { MockHelper } from "../stub";
import { Observable } from "rxjs/Observable";
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { HttpTestingController } from "@angular/common/http/testing";
import 'rxjs/add/observable/of';

const dummyUsers = [
      { id:1,name:'Hr' },
      { id:2,name:'sales' },
      { id:3,name:'research' },
    ];

describe('FormService', () => {
  let mockHelper:MockHelper;
  let formService:FormService;
  let httpMock:HttpTestingController;
  
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormService],
      imports:[HttpClientTestingModule]
    });
    formService=TestBed.get(FormService);
     httpMock = TestBed.get(HttpTestingController);
     mockHelper=new MockHelper();
    
  });
  afterEach(() => {
  httpMock.verify();
});

  it('should be created', inject([FormService], (service: FormService) => {
    expect(service).toBeTruthy();
  }));


  xit('should return array of departments on calling getDepartment',()=>{
    spyOn((<any>formService),'get').and.returnValue(mockHelper.Departments);
    expect(formService.getDepartment()).toEqual(Observable.of(mockHelper.Departments))
  })

  
   xit('should get the data successful', () => {
    formService.getDepartment().subscribe((data: any) => {
      expect(data.name).toBe('Luke Skywalker');
    });
  });
});



