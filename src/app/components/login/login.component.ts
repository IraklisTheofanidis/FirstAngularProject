import { CustomersService } from './../../services/customers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName="";
  errorUserName=false;

  password="";
  errorPassword=false;

  customers:any=[];
  constructor(private _customersService:CustomersService) {}

  ngOnInit(): void {
     this._customersService.getCustomers()
            .subscribe(data => this.customers=data);
  }

  onLogin(){
    if(this.showErrorMessage()){
      return;
    }
    for(let customer of this.customers){
      console.log(customer.userName)
        
    }
    this.checkLogin();   
  }

  showErrorMessage(){
    if( this.userName=="" || this.password==""){
      this.userName=="" ? this.errorUserName=true : this.errorUserName=false;
      this.password=="" ? this.errorPassword=true : this.errorPassword=false;   
      return true;
    }
    this.errorUserName=false;
    this.errorPassword=false;
    return false;
  }

  checkLogin(){
    for(let customer of this.customers){
      if(customer.userName==this.userName && customer.password==this.password){
        alert("Registered");
        return;
      }
    }
    alert("oups");
    return;
  }

}



// ngOnInit(): void {
//   this.customers=this._customersService.getCustomers();
// }

