import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../service/registration.service'
import { User } from '../AllClasses/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(

    private registerservice:RegistrationService,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.registerservice.logout();

  }

  users=new User();
  errormsg:string;
  invalidLogin=false;
  checkLogin()
  {
    this.registerservice.loginUser(this.users).subscribe(
      data =>{
        sessionStorage.setItem('newuser',this.users.email);
        console.log(sessionStorage.getItem('newuser'));
        this.route.navigate(['/welcome']);
      
    },
      error =>{
        console.log("exception occerd");
        this.errormsg="please enter valid username and password";
      }
    )}


 

}
