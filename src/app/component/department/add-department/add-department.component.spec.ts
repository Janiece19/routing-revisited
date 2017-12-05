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
   let mockRouter = {
  	navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddDepartmentComponent],
      providers: [
      {provide:FormService,useClass:MockHelper},
      { provide: Router, useValue: mockRouter},],
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
  fit('should navigate to home on clicking save()', () => {
    spyOn(<any>formService, 'saveDepartment').and.returnValue(Observable.of([{ id: 1, name: 'Finance' }]));
   
   
    fixture.detectChanges();
    component.AddDepartment();
    fixture.whenStable().then(() => {
      expect(<any>formService.saveDepartment).toHaveBeenCalledTimes(1);
      //  expect(<any>formService.saveDepartment).toHaveBeenCalledWith(({ id: 1, name: 'Finance' }));
      expect(router.navigate).toHaveBeenCalledWith(['/home']);



    });
  })

  fit('should add a new record on clicking save()', () => {
    

   component.department.id=4;
    component.department.name = 'Finance';
    fixture.detectChanges();
   
    component.AddDepartment();
    fixture.whenStable().then(() => {
     
      
      

      expect(router.navigate).toHaveBeenCalledWith(['/home']);
    });
  })


  it('should navigate to home on clicking cancel',()=>{
    // let spy=spyOn((<any>component).router, 'navigate')
    component.cancelForm();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  })
});

