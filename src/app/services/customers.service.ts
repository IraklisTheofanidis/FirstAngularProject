
import { ICustomer } from './../customer';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

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
  
users!:Observable<ICustomer[]>;
private itemsCollection!: AngularFirestoreCollection<ICustomer>;
constructor(private http:HttpClient,
    public firestore: AngularFirestore) { 
      this.itemsCollection=firestore.collection("users");

      this.users= firestore.collection('users').snapshotChanges().pipe(map(changes=>
        {
          return changes.map(a=>
            {
              const data= a.payload.doc.data() as ICustomer;
              data.id=a.payload.doc.id;
              return data;
            })
        }));
    }
  
    getUser(){
      return this.users;
    }

    addUser(customer:ICustomer){
      this.itemsCollection.add(customer);
    }

  
}



