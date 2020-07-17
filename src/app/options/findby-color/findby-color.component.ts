import { Component, OnInit } from '@angular/core';
import { CarparkingslotService } from '../../service/car/carparkingslot.service'
import { Car } from '../../AllClasses/car';


@Component({
  selector: 'app-findby-color',
  templateUrl: './findby-color.component.html',
  styleUrls: ['./findby-color.component.css']
})
export class FindbyColorComponent implements OnInit {

  constructor(
    private parkingService:CarparkingslotService
  ) { }

  ngOnInit(): void {
  }
  cars:Car[];
  color:string;
   colorErrorMsg:string;
  findCarByColor()
  {
     this.parkingService.findByColor(this.color).subscribe(
     response=>{
      this.cars=response;
      this.colorErrorMsg="";
     },
     error=>{
       this.colorErrorMsg="Color Not Found";
     }

    )
  }



}
