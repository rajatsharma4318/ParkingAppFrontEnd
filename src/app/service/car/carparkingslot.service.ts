import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../../AllClasses/car';

@Injectable({
  providedIn: 'root'
})
export class CarparkingslotService {

  constructor(
    private http: HttpClient
  ) { }


  public setParkingSlot(slotsize):Observable<any>
  {
    return this.http.get<number>(`http://localhost:8080/set-parking-slot/${slotsize}`);
  }

  public getAllCarInfo(): Observable<any>{
    return this.http.get<Car[]>("http://localhost:8080/get-all-parking");
  }  
  
  public removeCarSlot(id): Observable<any>{
    return this.http.get<Car[]>(`http://localhost:8080/remove-slot/${id}`);
  } 


  public bookSlot(car):Observable<any>{
    return this.http.put<Car[]>('http://localhost:8080/bookslot',car)
  }


  public findByColor(color):Observable<any>{
    return this.http.get<Car[]>(`http://localhost:8080/get-car-by-color/${color}`);
  }


  public findByRegisterNum(registernumber):Observable<any>{
    return this.http.get<Car>(`http://localhost:8080/get-carslot-by-register/${registernumber}`);
  }

}
