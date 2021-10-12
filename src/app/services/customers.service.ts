import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  fullName=""
  customers:Array<any>=[
    {fullName:"Iraklis Theofanidis",userName:"hercules",password:"password1"},
    {fullName:"Vasilis Georgiou",userName:"bill",password:"password2"},
    {fullName:"Giorgos Vasiliadis",userName:"george",password:"password3"}
  ]

  constructor() { }
  getCustomers(){
    return this.customers
    // [
    //   {fullName:"Iraklis Theofanidis",userName:"hercules",password:"password1"},
    //   {fullName:"Vasilis Georgiou",userName:"bill",password:"password2"},
    //   {fullName:"Giorgos Vasiliadis",userName:"george",password:"password3"}
    //   // {"fullName":"Iraklis Theofanidis","userName":"hercules","password":"password1"},
    //   // {"fullName":"Vasilis Georgiou","userName":"bill","password":"password2"},
    //   // {"fullName":"Giorgos Vasiliadis","userName":"george","password":"password3"}
    // ];   
  }
}
