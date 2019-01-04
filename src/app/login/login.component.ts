import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { CustomValidator} from '../custom-validator';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,
              private fb: FormBuilder) { }

  model:any = {};
  loginForm: FormGroup;
  submitted= false;
  imagePath = 'login/Images/give-money.png';
  ngOnInit() {
    this.loginForm = this.fb.group({
      lgnEmail: ['',[Validators.required,CustomValidator.emailValidator]],
      lgnPassword: ['',[Validators.required,Validators.minLength(6)]]
    })
  }
  get f() {return this.loginForm.controls;}
  
  //On click of Login Button submit & Validate form
  onLogin(){
    
    this.submitted = true;

    if(this.loginForm.invalid){
    }
    else{
      this.route.navigateByUrl('/dashboard');
     // alert('Success');
    }
    
  }
  
  //On enter Submit form
  keyDownFunction(event) {
    if(event.keyCode == 13) {
     // alert('you just clicked enter');
      this.submitted = true;

    if(this.loginForm.invalid){
    }
    else{
      this.route.navigateByUrl('/dashboard');
      //alert('Success');
    }
    }
  }
  login(){
      this.route.navigateByUrl('/register');
    }
 
  
  }
