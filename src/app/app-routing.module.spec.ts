import {Location} from "@angular/common";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import { AppRoutingModule, routes } from "./app-routing.module";
import { ComponentFixture } from "@angular/core/testing";
import { async } from "@angular/core/testing";
import { DepartmentComponent } from "./component/department/department.component";
import { AddDepartmentComponent } from "./component/department/add-department/add-department.component";
import { EditDeptComponent } from "./edit-dept/edit-dept.component";
import { DepartmentDetailComponent } from "./department-detail/department-detail.component";
import {FormsModule} from '@angular/forms';



 describe('Router: App', () => {

  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule,FormsModule,RouterTestingModule.withRoutes(routes)], 
      declarations: [
         DepartmentComponent,
    AddDepartmentComponent,
    EditDeptComponent,
    DepartmentDetailComponent,

    
      ]
    });

    router = TestBed.get(Router); 
    location = TestBed.get(Location); 
        // fixture= new AppRoutingModule;
    // fixture = TestBed.createComponent(AppRoutingModule); 
    router.initialNavigation(); 
  });


it('navigate to "" redirects you to /home', ()=> { 
  router.navigate(['']).then(()=>{
 
  expect(location.path()).toBe('/home'); 
  });

});

it('navigate to "home" takes you to /home', ()=> {
    router.navigate(['/home']).then(()=>{
    
    expect(location.path()).toBe('/home');
    });
  });


  it('navigate to "add" takes you to /add', ()=> {
    router.navigate(['/add']).then(()=>{
    
    expect(location.path()).toBe('/add');
    });
  });



 it('navigate to "view-detail" takes you to /view-detail', ()=> {
    router.navigate(['/view-detail']).then(()=>{
    
    expect(location.path()).toBe('/view-detail');
    });
  });


   fit('navigate to "edit/:id" takes you to /edit/id', ()=> {
    router.navigate(['/edit/2']).then(()=>{
    
    expect(location.path()).toBe('/edit/2');
    });
  });
}); 