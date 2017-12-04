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

describe('AddDepartmentComponent', () => {
  let component: AddDepartmentComponent;
  let fixture: ComponentFixture<AddDepartmentComponent>;
  let router: Router;
  let formService:FormService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDepartmentComponent ],
      providers:[FormService],
      imports:[RouterTestingModule.withRoutes([]),FormsModule,HttpClientModule]
    })
    .compileComponents();
    router = TestBed.get(Router); 
    formService=TestBed.get(FormService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate to home on clicking save()',()=>{
    spyOn(<any>formService, 'saveDepartment').and.returnValue({ subscribe: () => {[{ id: 1, name: 'Finance' }]} });
    let navigateSpy = spyOn((<any>component).router, 'navigate');
    
    component.department.id=1;
    component.department.name='Finance';
    fixture.detectChanges();
    //     dname.nativeElement.value = 'Tabinda';
    // let dname = fixture.debugElement.query(By.css('input[name="DeptName"]'));
    
    //     dname.nativeElement.dispatchEvent(new Event('input'));
    
    component.AddDepartment();
      fixture.whenStable().then(()=>{
    expect(<any>formService.saveDepartment).toHaveBeenCalledTimes(1);
    // expect(<any>formService.saveDepartment).toHaveBeenCalledWith(({ id: 1, name: 'Finance' }));
  
    // expect(navigateSpy).toHaveBeenCalledWith(['/home']);
   });
  })

  fit('should navigate to home on clicking save()',()=>{
    //  spyOn(<any>formService, 'saveDepartment').and.returnValue({ subscribe: () => {[{ id: 1, name: 'Finance' }]} });
    let navigateSpy = spyOn((<any>component).router, 'navigate');
    
    component.department.id=1;
    component.department.name='Finance';
    fixture.detectChanges();
    //     dname.nativeElement.value = 'Tabinda';
    // let dname = fixture.debugElement.query(By.css('input[name="DeptName"]'));
    
    //     dname.nativeElement.dispatchEvent(new Event('input'));
    
    component.AddDepartment();
      fixture.whenStable().then(()=>{
    
    // expect(<any>formService.saveDepartment).toHaveBeenCalledWith(({ id: 1, name: 'Finance' }));
  
     expect(navigateSpy).toHaveBeenCalledWith(['/home']);
   });
  })
});
