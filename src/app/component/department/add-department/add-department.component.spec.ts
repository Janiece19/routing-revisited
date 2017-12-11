import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepartmentComponent } from './add-department.component';
import { Router } from '@angular/router';
import { FormService } from '../../../shared/form-service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Department } from '../../../shared/form-model';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MockHelper } from "../../../stub";

describe('AddDepartmentComponent', () => {
  let component: AddDepartmentComponent;
  let fixture: ComponentFixture<AddDepartmentComponent>;
  let router: Router;
  let formService: FormService;
  let mockHelper: MockHelper;
  let savebutton;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddDepartmentComponent],
      providers: [
        { provide: FormService, useClass: MockHelper },
        { provide: Router, useValue: mockRouter },],
      imports: [RouterTestingModule.withRoutes([]), FormsModule, HttpClientModule]
    })
      .compileComponents();
    router = TestBed.get(Router);
    formService = TestBed.get(FormService);
    mockHelper = new MockHelper();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate to home on clicking save()', () => {
    spyOn(formService, 'saveDepartment').and.returnValue(Observable.of([{ id: 8, name: 'Finance' }]));
    component.department.id = 0;
    component.department.name = 'Hr'


    let obj = new Department();
    obj.id = component.department.id;
    obj.name = component.department.name;


    component.AddDepartment();

    expect(formService.saveDepartment).toHaveBeenCalledTimes(1);
    expect(formService.saveDepartment).toHaveBeenCalledWith(obj);
    expect(router.navigate).toHaveBeenCalledWith(['/home']);




  })

  it('should navigate to home on clicking save()', () => {
    spyOn(formService, 'saveDepartment').and.returnValue((mockHelper.saveDepartment({ id: 5, name: 'Finance' })));

 component.department.id=0;
 component.department.name='other';


    component.AddDepartment();
    expect(formService.saveDepartment).toHaveBeenCalledTimes(1);
    // expect(formService.saveDepartment).toHaveBeenCalledWith({ id: 5, name: 'Finance' });
    expect(mockHelper.Departments.length).toBe(5);
    expect(router.navigate).toHaveBeenCalledWith(['/home']);




  })


  it('should add a new record on clicking save()', () => {
    let oldObj = mockHelper.Departments;

    component.department.id = 0;
    component.department.name = 'Finance';


    component.AddDepartment();
    expect(mockHelper.Departments.length).toEqual(oldObj.length + 1);
    expect(router.navigate).toHaveBeenCalledWith(['/home']);


  })


  it('should navigate to home on clicking cancel', () => {
    // let spy=spyOn((<any>component).router, 'navigate')
    component.cancelForm();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  })
 



  it('should throw error when valid input is not passed when triggering save button ', () => {
    spyOn(formService,'saveDepartment').and.returnValue(Observable.of([{ id: 8, name: 'Finance' }]))
  // spyOn(console,'error');
  
   let dptName = fixture.debugElement.query(By.css('input[name="DeptName"]'));
   savebutton = fixture.debugElement.query(By.css('input[name="savebtn"]'));

  
   fixture.detectChanges();
   dptName.nativeElement.value = null;

    dptName.nativeElement.dispatchEvent(new Event('input'));

   fixture.detectChanges();
   savebutton.triggerEventHandler('click',null);
   fixture.detectChanges();

    expect(()=>component.AddDepartment()).toThrowError('Invalid input');
    expect(formService.saveDepartment).toHaveBeenCalledTimes(0);
   
    expect(router.navigate).not.toHaveBeenCalledWith(['/home']);
    expect(component.department.name.trim()).toEqual('')
    // expect(console.error).toHaveBeenCalledWith();
 
  });

  it('should throw error when valid input is not passed when triggering save button ', () => {
    spyOn(formService,'saveDepartment')
  // spyOn(console,'error');
  
   let dptName = fixture.debugElement.query(By.css('input[name="DeptName"]'));
   savebutton = fixture.debugElement.query(By.css('input[name="savebtn"]'));

  
   fixture.detectChanges();
   dptName.nativeElement.value = undefined;

    dptName.nativeElement.dispatchEvent(new Event('input'));

   fixture.detectChanges();
   savebutton.triggerEventHandler('click',null);
   fixture.detectChanges();

    expect(()=>component.AddDepartment()).toThrowError('Invalid input');
    expect(formService.saveDepartment).toHaveBeenCalledTimes(0);
   
    expect(router.navigate).not.toHaveBeenCalledWith(['/home']);
    expect(component.department.name.trim()).toEqual('undefined')
    // expect(console.error).toHaveBeenCalledWith();
 
  });

  fit('should throw error when saveDepartment fails', () => {
    spyOn(formService, 'saveDepartment').and.throwError(' Update Rejected');

    spyOn(console, 'error');
    component.department.id = 0;
    component.department.name = 'Finance';

    //let oldObject = JSON.parse(JSON.stringify(MockArrayHelper.student));
   
     component.AddDepartment( );
    
    expect(console.error).toHaveBeenCalledWith(new Error(' Update Rejected'));
  })



 
});


