import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { FormGroup,FormControl,FormBuilder,Validator, Validators} from '@angular/forms';
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
  ngOnInit() {
    this.loginForm = this.fb.group({
      lgnEmail: ['',Validators.required],
      lgnPassword: ['',Validators.required]
    })
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
  btnLogin(){
    this.route.navigateByUrl('/dashboard');
      console.log(this.loginForm.value);
    }
  }
