import { ICustomer } from './../../customer';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Router} from "@angular/router";
import { AngularFireAuth } from '@angular/fire/compat/auth';

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
    email:"",
    password:""
  }

  customers!:ICustomer[];

  constructor(private auth: AngularFireAuth,
              private router: Router) { }

  ngOnInit(): void {    
 }
 
  onRegister(){
    this.auth.createUserWithEmailAndPassword(this.customer.email,this.customer.password)
    .then(value=>{
      console.log("Nice , it worked");
      this.router.navigate(['/login']);
    })
    .catch(error=>{
      console.log("Something went wrong: ", error.message)
    })
    
    // if(this.showErrorMessage()){
    //   return;
    // }

  //   this._customersService.addUser(this.customer);
  //   this.customer.fullName="";
  //   this.customer.userName="";
  //   this.customer.password="";
  //   alert("You have Registered.Now you can Sign in");
  //   this.router.navigate(['/login']);
  }

  
     
  

  // showErrorMessage(){
  //   if(this.customer.fullName=="" || this.customer.userName=="" || this.customer.password==""){
  //     this.customer.fullName=="" ? this.errorFullName=true : this.errorFullName=false;
  //     this.customer.userName=="" ? this.errorUserName=true : this.errorUserName=false;
  //     this.customer.password=="" ? this.errorPassword=true : this.errorPassword=false;   
  //     return true;
  //   }
  //   this.errorFullName=false;
  //   this.errorUserName=false;
  //   this.errorPassword=false;
  //   return false;
  // }

}

