import { IBook } from './../../books';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
  styleUrls: ['./my-library.component.css']
})
export class MyLibraryComponent implements OnInit ,OnDestroy{

  books!: IBook[];
  faPlusCircle = faPlusCircle;
  faTimes = faTimes;
  faSignOutAlt=faSignOutAlt

  showOpacity = true;
  showForm = false;

  title!: string;
  author!: string;
  pages: number = 0;
  read: boolean = false;


  constructor(private _booksService: BooksService, private route: ActivatedRoute,private auth: AngularFireAuth,
    private router: Router) { }
  id: any;
  useridd: string = "";
  sub?:Subscription;
  ngOnInit(): void {

    this.id = (this.route.snapshot.paramMap.get("id"));
    this.useridd = this.id;

    //  this._booksService.getBooks2().subscribe(books => {
    //   this.books=books;
    // })
    this.sub=this._booksService.getBooks2().subscribe(books => {
      this.books=books.filter(book => book.userId === this.useridd);
    });

  }

  ngOnDestroy(): void{
    this.sub?.unsubscribe();
  }
  change(book: IBook) {
    //book.read = !book.read;
    this._booksService.updateBook(book);
  }

  deleteBook(event: any, book: IBook) {

    this._booksService.deleteBook(book)
  }

  formBook() {
    this.showOpacity = !this.showOpacity;
    this.showForm = !this.showForm;
  }
  newBook() {
    const newBook = {
      title: this.title,
      author: this.author,
      pages: this.pages,
      read: this.read,
      userId: this.useridd

    }
    this._booksService.addBooks2(newBook);

    this.initialization();
  }

  closeForm() {
    this.showOpacity = !this.showOpacity;
    this.showForm = !this.showForm;
    this.initialization();

  }

  signOut(){
    this.auth.signOut();
    this.router.navigate(['/login']);
  }
  initialization() {
    this.title = "";
    this.author = "";
    this.pages = 0;
    this.read = false;
  }
}

//  allow read, write: if request.auth.uid!=null
