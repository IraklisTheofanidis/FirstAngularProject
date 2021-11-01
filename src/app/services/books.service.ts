
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

  //books!:Observable<IBook[]>;

  private booksCollection: AngularFirestoreCollection<IBook>;
  //private itemDoc: AngularFirestoreDocument<IBook>
  
  constructor(public firestore: AngularFirestore) {
      this.booksCollection=firestore.collection("books");
      //itemsCollection=firestore.collection("books");
      //,public itemsCollection:AngularFirestoreCollection<IBook>
     }

  getBooks2():Observable<IBook[]> {
    return this.firestore.collection('books').snapshotChanges().pipe(map(changes=>
      {
        return changes.map(a=>
          {
            const data= a.payload.doc.data() as IBook;
            data.id=a.payload.doc.id;
            return data;
          })
      }));
   // return this.books;
  }
  
  addBooks2(book:IBook){
    this.booksCollection.add(book)
  }

  deleteBook(book:IBook){
  //  this.firestore.doc(`books/${book.id}`).delete();
    this.booksCollection.doc(book.id).delete();
  }

  updateBook(book:IBook){
    const previousReadStatus=book.read;
    this.booksCollection.doc(book.id).update({read:!previousReadStatus});
    // this.firestore.doc(`books/${book.id}`).delete();
  }
  // updateBooks(book:IBook):Observable<IBook>{
  //     const url= `${this._url}/${book.id}`;
  //     return this.http.put<IBook>(url,book,httpOptions)
  // }

}
