import { Component, OnInit } from '@angular/core';
import { Car } from '../AllClasses/car';
import { CarparkingslotService } from '../service/car/carparkingslot.service';

@Component({
  selector: 'app-welcomehome',
  templateUrl: './welcomehome.component.html',
  styleUrls: ['./welcomehome.component.css']
})
export class WelcomehomeComponent implements OnInit {

  constructor(
    private carparkingservice:CarparkingslotService
  ) { }

  ngOnInit(): void {
      this.refrashMethod();    
  }

  slotsize:number;
  slotbooked:string
   sizefixed:number
  setParkingSlotSize()
  {
    console.log("size");
    this.carparkingservice.setParkingSlot(this.slotsize).subscribe(
      response=> {
          this.slotbooked=`Parking Slot Set for ${this.slotsize} Successfully`;
       },
      error=>{
        console.log("error")
      }
    )
  }



  carList:Car[];
  newcar=new Car();

  addedSuccess:string='';
  errorMessage:string='';

  refrashMethod(){
     this.carparkingservice.getAllCarInfo().subscribe(
       response=>{
       this.carList=response;
       }
     )
    }

    bookcarSlot()
    {
       this.carparkingservice.bookSlot(this.newcar).subscribe(
         response=>{
          this.addedSuccess=`Allocated Slot Successfully`; 
          this.errorMessage='';
          this.deletemessage='';
          this.refrashMethod();
         },
         error=>{
           this.errorMessage='Sorry, parking lot is full';
           this.addedSuccess='';
           this.deletemessage='';
           this.refrashMethod();
         }
       )
    }

 



  deletemessage:string;

  removeSlot(id){
    this.carparkingservice.removeCarSlot(id).subscribe(
      response =>{
        this.deletemessage=`Delete ${id} Successful`;
        this.addedSuccess='';
        this.refrashMethod();
      }
    )
  }



}
