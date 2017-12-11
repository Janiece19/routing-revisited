import { TestBed, inject } from '@angular/core/testing';
import { FormService } from './form-service';
import { MockHelper } from "../stub";
import { Observable } from "rxjs/Observable";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from "@angular/common/http/testing";
import 'rxjs/add/observable/of';
import { Department } from "./form-model";
import { HttpClient,HttpClientModule } from "@angular/common/http";
import { async } from "@angular/core/testing";

const dummyUsers = [
  { id: 1, name: 'Hr' },
  { id: 2, name: 'sales' },
  { id: 3, name: 'research' },
];

describe('FormService', () => {
  let mockHelper: MockHelper;
  let formService: FormService;
  let httpMock: HttpTestingController;
  let http:HttpClient;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormService],
      imports: [HttpClientTestingModule,HttpClientModule]
    });
    formService = TestBed.get(FormService);
    httpMock = TestBed.get(HttpTestingController);
    http=TestBed.get(HttpClient);
    mockHelper = new MockHelper();

  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([FormService], (service: FormService) => {
    expect(service).toBeTruthy();
  }));


  it('should return array of departments on calling getDepartment', () => {
    spyOn((<any>formService), 'get').and.returnValue(mockHelper.Departments);
    expect(formService.getDepartment()).toEqual(Observable.of(mockHelper.Departments))
  })


  it('should get the data successful', () => {
    formService.getDepartment().subscribe((data: any) => {
      expect(data.name).toBe('Luke Skywalker');
    });
  });



  fit('should return an Observable<User[]>', () => {

    formService.getDepartment().subscribe(users => {
      expect(users.length).toBe(4);
       expect(users).toEqual(mockHelper.Departments);
    });

    const req = httpMock.expectOne(`http://localhost:4000/emp/departments`);
    expect(req.request.method).toBe("GET");
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(mockHelper.Departments);
  });


fit('should post the correct data', () => {
  formService.saveDepartment<Department>({ id:2,name:'Hr'}).subscribe((data: any) => {
     expect(data.id).toBe(2);
     expect(data.name).toBe('Hr');
  });

  const req = httpMock.expectOne(`http://localhost:4000/emp/departments`, 'post ');
  expect(req.request.method).toBe('POST');
  expect(req.request.body).toEqual({id:2,name:'Hr'});

  req.flush({
    id:2,
    name:'Hr'
  });

 
});

it('should put the correct data', () => {
  formService.updateDepartment({ id:3,name:'Sales'}).subscribe((data: any) => {
     expect(data.id).toBe(3);
     expect(data.name).toBe('Sales');
  });

  const req = httpMock.expectOne(`http://localhost:4000/emp/departments`);
  expect(req.request.method).toBe('PUT');
  expect(req.request.body).toEqual({id:3,name:'Sales'});

  req.flush({
    id:3,
    name:'Sales'
  });

 
});


it('should delete the correct data', () => {
  formService.deleteDepartment(3).subscribe((data: any) => {
    expect(data).toBe(3);
  });

  const req = httpMock.expectOne(`http://localhost:4000/emp/departments/3`, 'delete to api');
  expect(req.request.method).toBe('DELETE');

  req.flush(3);

  
});

  it('should throw error an Observable<User[]>', async(inject([HttpClient, HttpTestingController],
    (http: HttpClient, backend: HttpTestingController) => {

   (<any>formService).http.get(`http://localhost:3500/emp45/departments`).subscribe();
    const req = httpMock.expectNone(`http://loalhost:4000/emp45/departments`);
      

       
    

    
  })));

  fit('should throw error an Observable<User[]>', 
   ()  => {

   (<any>formService).http.get(`http://localhost:3500/emp45/departments`).subscribe();
  httpMock.expectNone(`http://loalhost:4000/emp45/departments`);
      

       
    

    
  });








});


