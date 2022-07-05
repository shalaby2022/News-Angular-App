import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isValid: boolean = false;

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  addData(data:any) 
  {
    this.isValid = true
    if(data.valid) 
    {
      console.log("true")
      localStorage.setItem("Email",JSON.stringify(data.controls['Email'].value));
      this._router.navigate([''])
    }
  }

}
