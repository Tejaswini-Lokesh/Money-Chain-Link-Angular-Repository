import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { CustomValidator} from '../custom-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route:Router,
              private fb: FormBuilder) { }
  
  
    registerForm: FormGroup;
    submitted = false;
  ngOnInit() 
  {
    this.registerForm = this.fb.group({
      regName: ['',[Validators.required,CustomValidator.nameValidator]],
      regMobileNo: ['',[Validators.required,Validators.maxLength(10),Validators.minLength(10),CustomValidator.numberValidator]],
      regEmail: ['',[Validators.required,CustomValidator.emailValidator]],
      regRefId: ['',[Validators.required,CustomValidator.numberValidator]],
      regPassword: ['',[Validators.required,Validators.minLength(6)]]
    })
  }
  get f() {return this.registerForm.controls;}
  login(){
    this.route.navigateByUrl('/login');
  }
  onRegister(){
    this.submitted = true;
    if(this.registerForm.invalid){
      //alert('invalid form');
    }
    else{
       
        var retVal = prompt("Enter OTP : ", "");
        if(retVal != null)
        {
          this.route.navigateByUrl('/dashboard');
        }
        else{
          this.route.navigateByUrl('/register');
        }
      }
      
      
    }
    
    
    
}
