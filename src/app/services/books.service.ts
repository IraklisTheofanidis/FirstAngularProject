import { Injectable } from '@angular/core';
import { IBook } from '../books';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// const httpOptions={
//   headers: new HttpHeaders({
//     'Content-type':"application/json;charset=utf-8'"
//   })
// }

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private _url ="http://localhost:5000/books";
  constructor(private http:HttpClient) { }

  getBooks():Observable<IBook[]>{
    return this.http.get<IBook[]>(this._url);
   
  }
}
