import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeptComponent } from './edit-dept.component';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { FormService } from "../shared/form-service";
import { MockHelper } from "../stub";
import { FormsModule } from "@angular/forms";
import { Department } from "../shared/form-model";
import { By } from "@angular/platform-browser";

describe('EditDeptComponent', () => {
  let component: EditDeptComponent;
  let fixture: ComponentFixture<EditDeptComponent>;
  let router: Router;
  let formService: FormService;
  let mockHelper: MockHelper;
  let activatedRoute: ActivatedRoute
  let updatebutton;
  let clearbutton;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }
  let editComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditDeptComponent],
      providers: [EditDeptComponent,{ provide: Router, useValue: mockRouter },
      { provide: FormService, useClass: MockHelper },
      { provide: ActivatedRoute, useValue: { params: Observable.of({ id: 4,name:'Hr' }) } }],
      imports: [FormsModule]
    })
      .compileComponents();
    router = TestBed.get(Router);
    formService = TestBed.get(FormService);
    activatedRoute = TestBed.get(ActivatedRoute);
    mockHelper = new MockHelper();
    editComponent=TestBed.get(EditDeptComponent);
    // updatebutton = fixture.debugElement.query(By.css('input[name="updatetbtn"]'));
    // clearbutton = fixture.debugElement.query(By.css('input[name="clearbtn"]'));

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set foo to "3"', () => {
    expect(component.id).toBe(123);
  });



  it('should navigate to home on clicking update()', () => {
    spyOn(formService, 'updateDepartment').and.returnValue((mockHelper.updateDepartment({ id: 2, name: 'marketing' })));
     component.department.id=3;
     component.department.name='jaya'
    component.updateDepartment();

    expect(formService.updateDepartment).toHaveBeenCalledTimes(1);
    expect(formService.updateDepartment).toHaveBeenCalledWith({ id: 3, name: 'jaya' });
    expect(mockHelper.Departments.length).toBe(4);
    expect(router.navigate).toHaveBeenCalledWith(['/home']);






  })
  it('should call updateDepartment method when triggering update button ', () => {
    spyOn(formService,'updateDepartment').and.returnValue(Observable.of([{ id: 8, name: 'Finance' }]))
    let dptName = fixture.debugElement.query(By.css('input[name="DeptName"]'));
    updatebutton = fixture.debugElement.query(By.css('input[name="updatetbtn"]'));

   
    fixture.detectChanges();
    dptName.nativeElement.value = 'finance';

     dptName.nativeElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    updatebutton.triggerEventHandler('click',null);

   expect(formService.updateDepartment).toHaveBeenCalledTimes(1);
    // expect(formService.updateDepartment).toHaveBeenCalledWith();
     expect(dptName.nativeElement.value ).toBe('finance');
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
    expect(component.department.name.trim()).toEqual('finance')
  });

   it('should call updateDepartment method when triggering update button ', () => {
     spyOn(formService,'updateDepartment').and.returnValue(Observable.of([{ id: 8, name: 'Finance' }]))
   
  //  spyOn(console,'error');
    let dptName = fixture.debugElement.query(By.css('input[name="DeptName"]'));
    updatebutton = fixture.debugElement.query(By.css('input[name="updatetbtn"]'));

   
    fixture.detectChanges();
    dptName.nativeElement.value = null;

     dptName.nativeElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    updatebutton.triggerEventHandler('click',null);
    fixture.detectChanges();

     expect(()=>component.updateDepartment()).toThrowError('Invalid input');
    expect(formService.updateDepartment).toHaveBeenCalledTimes(0);
     expect(router.navigate).not.toHaveBeenCalledWith(['/home']);
     expect(component.department.name.trim()).toEqual('')
    //  expect(console.error).toHaveBeenCalledWith();
  });


  it('should navigate to home on clicking cancel', () => {
    // let spy=spyOn((<any>component).router, 'navigate')
    component.cancelForm();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  })


it('should navigate to home on clicking cancel', () => {
  
  clearbutton = fixture.debugElement.query(By.css('input[name="clearbtn"]'));
  clearbutton.triggerEventHandler('click',null);
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  })


  fit('should call getdeptment with url id on calling ngOnInit',()=>{
  spyOn(formService,'getDeptment').and.returnValue(Promise.resolve({id:4,name:'Hr'}));;
  component.ngOnInit();
  expect(formService.getDeptment).toHaveBeenCalledWith(4);
  expect(formService.getDeptment).toHaveBeenCalledTimes(1);
})

it('should call getdeptment with url id on calling ngOnInit',()=>{
  // spyOn(<any>formService,'getDeptment').and.returnValue(Promise.resolve({id:1,name:'Hr'}));
  component.ngOnInit();
  expect(component.department).toEqual({id:2,name:'Sales'});
  
})
it('should throw error when findAndUpdate fails', () => {
    spyOn(formService, 'updateDepartment').and.throwError(' Update Rejected');

    spyOn(console, 'error');

    //let oldObject = JSON.parse(JSON.stringify(MockArrayHelper.student));
   
     component.updateDepartment( );
    
    expect(console.error).toHaveBeenCalledWith(new Error(' Update Rejected'));
  })


  it('should throw error when router is undefined',()=>{
    spyOn(console,'error');
    (<any>component).router=undefined;
    component.cancelForm();
    expect(console.error).toHaveBeenCalledWith(new TypeError("Cannot read property 'navigate' of undefined"));
    
   })


it('should throw error when activatedroute is undefined',()=>{
    spyOn(console,'error');
    (<any>component).route=undefined;
    component.ngOnInit();
    expect(console.error).toHaveBeenCalledWith(new TypeError("Cannot read property 'params' of undefined"));
    
   })


   fit('should throw error when formService is undefined',()=>{
     spyOn(console,'error');
      (<any>component).formService=undefined;
      component.updateDepartment();
      expect(console.error).toHaveBeenCalledWith(new TypeError("Cannot read property 'updateDepartment' of undefined"));

   })


   


 




});
