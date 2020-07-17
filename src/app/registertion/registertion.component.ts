import { Component, OnInit } from '@angular/core';
import { User } from '../AllClasses/user';
import { RegistrationService } from '../service/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registertion',
  templateUrl: './registertion.component.html',
  styleUrls: ['./registertion.component.css']
})
export class RegistertionComponent implements OnInit {
   
  
  constructor(
  private registerservice:RegistrationService,
  private route:Router

  ) { }

  ngOnInit(): void {
  }

  newuser=new User();

  errormsg:string;
  registerUser()
  {
    this.registerservice.saveUser(this.newuser).subscribe(
      response=>{
        console.log("response Recived"),
        this.route.navigate(['/login']);
      },
      error=>{
       console.log("already ragistered");
       this.errormsg="already ragistered"; 
      }
    )
  }

}
