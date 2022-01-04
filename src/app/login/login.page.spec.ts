import { Location } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { LoginPage } from './login.page';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from 'protractor';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let page: any;
  let location: Location;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule.withRoutes([
          {path: 'home', component: HomePage}
        ]),
        ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    location = TestBed.get(Location);
    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('given email is empty, then login button should be disabled', () => {
    fixture.detectChanges();

    component.form.get('password').setValue('12345678');
    fixture.detectChanges();

    expect(page.querySelector('#login').disabled).toBeTruthy();
  });

  it('given email is invalid, then login button should be disabled', () => {
    fixture.detectChanges();

    component.form.get('email').setValue('invalidEmail');
    component.form.get('password').setValue('12345678');
    fixture.detectChanges();

    expect(page.querySelector('#login').disabled).toBeTruthy();
  });

  it('given password is empty, then login button should be disabled', () => {
    fixture.detectChanges();

    component.form.get('email').setValue('any@email.com');
    component.form.get('password').setValue('');
    fixture.detectChanges();

    expect(page.querySelector('#login').disabled).toBeTruthy();
  });

  it('given password has less than 6 characters, then login button should be disabled', () => {
    fixture.detectChanges();

    component.form.get('email').setValue('any@email.com');
    component.form.get('password').setValue('12345');
    fixture.detectChanges();

    expect(page.querySelector('#login').disabled).toBeTruthy();
  });

  it('given email and password are filled and valid, then login button should be enabled', () => {
    fixture.detectChanges();

    component.form.get('email').setValue('any@email.com');
    component.form.get('password').setValue('12345678');
    fixture.detectChanges();

    expect(page.querySelector('#login').disabled).toBeFalsy();
  });

  it('given form is valid, when user clicks on login button, then go to home page', fakeAsync(() => {
    const dummyData = {
      email: 'any@email.com',
      password: '12345678'
    };

    component.form.patchValue(dummyData);
    fixture.detectChanges();

    expect(component.form.valid).toEqual(true);

    page.querySelector('#login').click();
    tick(500);

    expect(location.path()).toEqual('/home');
  }));

});
