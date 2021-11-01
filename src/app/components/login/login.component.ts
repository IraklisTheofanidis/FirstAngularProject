import { ICustomer } from './../../customer';
import { CustomersService } from './../../services/customers.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  errorUserName = false;

  password = "";
  errorPassword = false;

  id = 0;
  customers!: ICustomer[];
  constructor(private _customersService: CustomersService, private auth: AngularFireAuth,
    private router: Router) { }

  ngOnInit(): void {


    // this._customersService.getUser().subscribe(customers => {
    //   this.customers = customers;
    // })
  }

  onLogin() {


    this.auth.signInWithEmailAndPassword(this.email, this.password).then(kati=>
      {
        console.log(kati.user?.email);
        const id=kati.user?.uid;
        this.router.navigate(['/myLibrary',id]);
      }).catch(()=>alert("Something is wrong"));
      
    //this.router.navigate(['/myLibrary',id]);
    //   if(this.showErrorMessage()){
    //     return;
    //   }

    //   this.checkLogin();   
  }

  // showErrorMessage(){
  //   if( this.userName=="" || this.password==""){
  //     this.userName=="" ? this.errorUserName=true : this.errorUserName=false;
  //     this.password=="" ? this.errorPassword=true : this.errorPassword=false;   
  //     return true;
  //   }
  //   this.errorUserName=false;
  //   this.errorPassword=false;
  //   return false;
  // }

  // checkLogin(){
  //   for(let customer of this.customers){
  //     if(customer.userName==this.userName && customer.password==this.password){
  //       alert("Registered");
  //       let id=customer.id;
        
  //       return;
  //     }
  //   }
  //   alert("oups");
  //   return;
  // }


}




// ngOnInit(): void {
//   this.customers=this._customersService.getCustomers();
// }

