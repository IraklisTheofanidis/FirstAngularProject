
import { IBook } from 'src/app/books';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

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

  books!:Observable<IBook[]>;

  private itemsCollection!: AngularFirestoreCollection<IBook>;
  private itemDoc!: AngularFirestoreDocument<IBook>
  constructor(private http:HttpClient,
    public firestore: AngularFirestore) {
      this.itemsCollection=firestore.collection("books");

      this.books= firestore.collection('books').snapshotChanges().pipe(map(changes=>
        {
          return changes.map(a=>
            {
              const data= a.payload.doc.data() as IBook;
              data.id=a.payload.doc.id;
              return data;
            })
        }));
     }

  getBooks2()  {
    return this.books;
  }
  
  addBooks2(book:IBook){
    this.itemsCollection.add(book)
  }

  deleteBook(book:IBook){
    this.itemDoc = this.firestore.doc(`books/${book.id}`);
    this.itemDoc.delete();
  }

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

  addBook(book:IBook):Observable<IBook>{
    return this.http.post<IBook>(this._url,book,httpOptions)
  }
}
