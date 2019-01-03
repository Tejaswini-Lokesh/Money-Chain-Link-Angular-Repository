import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
    $(document).ready(function() {
      $('.dashboard').addclass('active');
  });
  }
  logout(){
    //alert(1);
    this.route.navigateByUrl('/login');
  }
  onDashboard(){
    alert(1);
    this.route.navigateByUrl('/dashboard');
  }
}
