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
  let updatebutton
  let clearbutton
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditDeptComponent],
      providers: [{ provide: Router, useValue: mockRouter },
      { provide: FormService, useClass: MockHelper },
      { provide: ActivatedRoute, useValue: { params: Observable.of({ id: 1,name:'Hr' }) } }],
      imports: [FormsModule]
    })
      .compileComponents();
    router = TestBed.get(Router);
    formService = TestBed.get(FormService);
    activatedRoute = TestBed.get(ActivatedRoute);
    mockHelper = new MockHelper();
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

   fit('should call updateDepartment method when triggering update button ', () => {
    // spyOn(formService,'updateDepartment').and.returnValue(Observable.of([{ id: 8, name: 'Finance' }]))
   
   spyOn(console,'error');
    let dptName = fixture.debugElement.query(By.css('input[name="DeptName"]'));
    updatebutton = fixture.debugElement.query(By.css('input[name="updatetbtn"]'));

   
    fixture.detectChanges();
    dptName.nativeElement.value = null;

     dptName.nativeElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    updatebutton.triggerEventHandler('click',null);

  //  expect(formService.updateDepartment).toHaveBeenCalledTimes(0);
    // expect(formService.updateDepartment).toHaveBeenCalledWith();
    //  expect(dptName.nativeElement.value ).toBe('finance');
    // expect(router.navigate).toHaveBeenCalledWith(['/home']);
     expect(component.department.name.trim()).toEqual('undefined')
     expect(console.error).toHaveBeenCalledWith();
  });


  it('should navigate to home on clicking cancel', () => {
    // let spy=spyOn((<any>component).router, 'navigate')
    component.cancelForm();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  })


fit('should navigate to home on clicking cancel', () => {
  
  clearbutton = fixture.debugElement.query(By.css('input[name="clearbtn"]'));
  clearbutton.triggerEventHandler('click',null);
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  })




});
