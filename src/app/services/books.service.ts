
import { IBook } from 'src/app/books';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books!:Observable<IBook[]>;

  private itemsCollection!: AngularFirestoreCollection<IBook>;
  private itemDoc!: AngularFirestoreDocument<IBook>
  //private firestore!:AngularFirestore
  constructor(public firestore: AngularFirestore) {
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
    // this.books= firestore.collection('books').snapshotChanges().pipe(map(changes=>
    //   {
    //     return changes.map(a=>
    //       {
    //         const data= a.payload.doc.data() as IBook;
    //         data.id=a.payload.doc.id;
    //         return data;
    //       })
    //   }));
    return this.books;
  }
  
  addBooks2(book:IBook){
    this.itemsCollection.add(book)
  }

  deleteBook(book:IBook){
    this.itemDoc = this.firestore.doc(`books/${book.id}`);
    this.itemDoc.delete();
  }

  updateBook(book:IBook){
    this.itemDoc = this.firestore.doc(`books/${book.id}`);
    this.itemDoc.update(book);
  }
  // updateBooks(book:IBook):Observable<IBook>{
  //     const url= `${this._url}/${book.id}`;
  //     return this.http.put<IBook>(url,book,httpOptions)
  // }

}
