import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from './validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isSubmitted: boolean = false;

  constructor(private fb:FormBuilder, private _router:Router) { }

  registerForm:FormGroup = this.fb.group({
    FirstName:[null,[Validators.required,Validators.minLength(3),Validators.maxLength(13)]],
    LastName:[null,[Validators.required,Validators.minLength(3),Validators.maxLength(13)]],
    Email:[null,[Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    UserName:[null,[Validators.required,Validators.pattern(/^[^\s]+$/)]],
    Password:[null,[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)]],
    ConfirmPssword:[null,[Validators.required]]

  },
  
  {
    validator:ConfirmedValidator('Password','ConfirmPssword')
  }
  );


  ngOnInit(): void {
  }

  get getControls()
  {
    return this.registerForm.controls;
  };

  sendData()
  {
    this.isSubmitted = true;
    if(this.registerForm.valid)
    { 
      console.log(this.registerForm)
      // this._router.navigate(['auth/login'])
    }
  };
}
