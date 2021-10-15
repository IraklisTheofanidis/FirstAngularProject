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
  fullName="";
  errorFullName=false;

  userName="";
  errorUserName=false;

  password="";
  errorPassword=false;

  @Output() changeUI=new EventEmitter(); 

  customers:any=[];
  
  constructor(private _customersService:CustomersService,
              private router: Router) { }

  ngOnInit(): void {
    this._customersService.getCustomers()
           .subscribe(data => this.customers=data);
 }
 
  onRegister(){
    if(this.showErrorMessage()){
      return;
    }
    
    for(let customer of this.customers){
      console.log(customer.userName)
        
    }
    const newCustomer={
      fullName:this.fullName,
      userName:this.userName,
       password:this.password
    }
    this.addCustomer(newCustomer);
    alert("You have Registered.Now you can Sign in");
    this.router.navigate(['/login']);
      console.log(this.customers);
    //  this.changeUI.emit();
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

   addCustomer(customer:ICustomer){
     this._customersService.addCustomer(customer).subscribe((customer)=>this.customers.push(customer));
   }
}


//this.customers.push({fullName:this.fullName, userName:this.userName, password:this.password})

// ngOnInit(): void {
//   this.customers=this._customersService.getCustomers();
// }