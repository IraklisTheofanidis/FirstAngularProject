import { IBook } from './../../books';
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
  
  books!:IBook[];
  faPlusCircle=faPlusCircle;
  faTimes=faTimes;
  
  showOpacity=true;
  showForm=false;

  title!:string;
  author!:string;
  pages!:number;
  read:boolean=false;


  constructor(private _booksService:BooksService,private route:ActivatedRoute) { }
  id:any;
  useridd:string="";

  ngOnInit(): void {
     
     this.id=(this.route.snapshot.paramMap.get("id"));
     this.useridd=this.id;

     this._booksService.getBooks2().subscribe(books => {
      this.books=books;
    })
    
  }
  change(book:IBook){
    book.read=!book.read;
    this._booksService.updateBooks(book).subscribe();
  }

  deleteBook(event:any,book:IBook){
    
    this._booksService.deleteBook(book)
  }
  // deleteBook(book:IBook){
  //   this._booksService.deleteBooks(book)
  //         .subscribe(
  //           ()=>this.books=this.books.filter((t:any)=>t.id!==book.id))
  // }

  formBook(){
    this.showOpacity=!this.showOpacity;
    this.showForm=!this.showForm;
  }
  newBook(){
    const newBook={
      title:this.title,
      author:this.author,
      pages:this.pages,
      read:this.read,
      userId:this.useridd
          
    }  
    this._booksService.addBooks2(newBook);

    console.log(newBook);
    this.initialization();
  }

  closeForm(){
    this.showOpacity=!this.showOpacity;
    this.showForm=!this.showForm;
    this.initialization();
    
  }

  initialization(){
    this.title="";
    this.author="";
    this.pages=0;
    this.read=false;
  }
}
