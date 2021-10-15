import { IBook } from 'src/app/books';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions={
  headers: new HttpHeaders({
    'Content-type':"application/json;charset=utf-8'"
  })
}
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private _url ="http://localhost:5000/books";
  constructor(private http:HttpClient) { }

  getBooks():Observable<IBook[]>{
    return this.http.get<IBook[]>(this._url);
   
  }

  updateBooks(book:IBook):Observable<IBook>{
      const url= `${this._url}/${book.id}`;
      return this.http.put<IBook>(url,book,httpOptions)
  }

  deleteBooks(book:IBook):Observable<IBook>{
    const url= `${this._url}/${book.id}`;
    return this.http.delete<IBook>(url);
  }
}
