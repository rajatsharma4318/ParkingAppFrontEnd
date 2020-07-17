import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/registration.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
  public registerserive:RegistrationService
  ) { }

 
  ngOnInit(): void {
    this.registerserive.isUserLoggedIn();
  }


}
