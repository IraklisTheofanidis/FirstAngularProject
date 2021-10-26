import { ICustomer } from './../../customer';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   errorFullName=false;
   errorUserName=false;
   errorPassword=false;

  customer:ICustomer={
    fullName:"",
    userName:"",
    password:""
  }

  customers!:ICustomer[];

  constructor(private _customersService:CustomersService,
              private router: Router) { }

  ngOnInit(): void {    
 }
 
  onRegister(){
    if(this.showErrorMessage()){
      return;
    }
  
    this._customersService.addUser(this.customer);
    this.customer.fullName="";
    this.customer.userName="";
    this.customer.password="";
    alert("You have Registered.Now you can Sign in");
    this.router.navigate(['/login']);
     
  }

  showErrorMessage(){
    if(this.customer.fullName=="" || this.customer.userName=="" || this.customer.password==""){
      this.customer.fullName=="" ? this.errorFullName=true : this.errorFullName=false;
      this.customer.userName=="" ? this.errorUserName=true : this.errorUserName=false;
      this.customer.password=="" ? this.errorPassword=true : this.errorPassword=false;   
      return true;
    }
    this.errorFullName=false;
    this.errorUserName=false;
    this.errorPassword=false;
    return false;
  }

}

