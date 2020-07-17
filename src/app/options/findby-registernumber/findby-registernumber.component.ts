import { Component, OnInit } from '@angular/core';
import { CarparkingslotService } from '../../service/car/carparkingslot.service';
import { Car } from '../../AllClasses/car';
@Component({
  selector: 'app-findby-registernumber',
  templateUrl: './findby-registernumber.component.html',
  styleUrls: ['./findby-registernumber.component.css']
})
export class FindbyRegisternumberComponent implements OnInit {

  constructor(
    private parkingservice:CarparkingslotService
  ) { }

  ngOnInit(): void {
  }

  registernumber:string;
  errormsg="";
  car:Car;
  findCarByRegisterNumber()
  {
     this.parkingservice.findByRegisterNum(this.registernumber).subscribe(
       response=>{
         this.car=response; 
         this.errormsg="";  
       },
       error=>{
          this.errormsg="data not found";
       }
     )
  }

}
