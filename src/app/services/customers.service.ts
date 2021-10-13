import { ICustomer } from './../customer';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions={
  headers: new HttpHeaders({
    'Content-type':"application/json;charset=utf-8'"
  })
}

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
 
//private _url ="/assets/data/customers.json"; 
private _url ="http://localhost:5000/customers";
  constructor(private http:HttpClient) { }
  
  getCustomers():Observable<ICustomer[]>{
    return this.http.get<ICustomer[]>(this._url);
   
  }

  addCustomer(customer:ICustomer):Observable<ICustomer>{
    return this.http.post<ICustomer>(this._url,customer,httpOptions)
  }
}



