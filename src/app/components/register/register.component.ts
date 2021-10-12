import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fullName="";
  errorFullName=false;

  userName="";
  errorUserName=false;

  password="";
  errorPassword=false;

  @Output() changeUI=new EventEmitter(); 

  customers:any=[];
  constructor(private _customersService:CustomersService) { }

  ngOnInit(): void {
    this.customers=this._customersService.getCustomers();
  }
  
  
  onRegister(){
    if(this.showErrorMessage()){
      return;
    }
    
     this.customers.push({fullName:this.fullName, userName:this.userName, password:this.password})
     console.log(this.customers);
     this.changeUI.emit();
  }

  showErrorMessage(){
    if(this.fullName=="" || this.userName=="" || this.password==""){
      this.fullName=="" ? this.errorFullName=true : this.errorFullName=false;
      this.userName=="" ? this.errorUserName=true : this.errorUserName=false;
      this.password=="" ? this.errorPassword=true : this.errorPassword=false;   
      return true;
    }
    this.errorFullName=false;
    this.errorUserName=false;
    this.errorPassword=false;
    return false;
  }
}
