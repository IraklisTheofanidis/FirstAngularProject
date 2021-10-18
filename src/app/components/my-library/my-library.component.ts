import { IBook } from 'src/app/books';
import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { ActivatedRoute } from '@angular/router';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
  styleUrls: ['./my-library.component.css']
})
export class MyLibraryComponent implements OnInit {
  books:any=[];
  faPlusCircle=faPlusCircle;
  faTimes=faTimes;
  showOpacity=true;
  showForm=false;

  constructor(private _booksService:BooksService,private route:ActivatedRoute) { }
  id:any;
  useridd:number=0;

  ngOnInit(): void {
    this._booksService.getBooks()
          .subscribe(data=>
            (this.books=data));

     this.id=(this.route.snapshot.paramMap.get("id"));
     this.useridd=Number(this.id);

  }

  change(book:IBook){
    book.read=!book.read;
    this._booksService.updateBooks(book).subscribe();
  }

  deleteBook(book:IBook){
    this._booksService.deleteBooks(book)
          .subscribe(
            ()=>this.books=this.books.filter((t:any)=>t.id!==book.id))
  }

  newBook(){
    this.showOpacity=!this.showOpacity;
    this.showForm=!this.showForm;
  }

  closeForm(){
    this.showOpacity=!this.showOpacity;
    this.showForm=!this.showForm;
  }
}
