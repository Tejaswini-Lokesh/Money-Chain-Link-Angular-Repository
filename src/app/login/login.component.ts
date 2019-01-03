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
  
  
  onLogin(){
    
    this.submitted = true;

    if(this.loginForm.invalid){
      // alert('invalid form');
    }
    else{
      this.route.navigateByUrl('/dashboard');
      alert('Success');
    }
    
  }
  login(){
    // $(document).ready(function(){
    //   var name = "tejaswini";
    //   console.log(name);
    //   alert(name);
    // })
      this.route.navigateByUrl('/register');
    }
  //   btnLogin(){
  //     this.route.navigateByUrl('/dashboard');
  //   }
  
  }
