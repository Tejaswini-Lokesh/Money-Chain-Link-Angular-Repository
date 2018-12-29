import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup,FormControl,FormBuilder,Validator,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route:Router,
              private fb: FormBuilder) { }
  
  
    registerForm: FormGroup;
  ngOnInit() 
  {
    this.registerForm = this.fb.group({
      regName: ['',Validators.required],
      regMobileNo: ['',Validators.required],
      regEmail: ['',Validators.required],
      regRefId: ['',Validators.required],
      regPassword: ['',Validators.required]
    })
  }
  login(){
    this.route.navigateByUrl('/login');
  }
  btnRegister(){
    if(this.registerForm.valid){  
      var retVal = prompt("Enter OTP : ", "");
      if(retVal != null)
      {
        this.route.navigateByUrl('/dashboard');
      }
      else{
        this.route.navigateByUrl('/register');
      }
    }
    else{
      alert('1');
    }
    
  }
  
}
