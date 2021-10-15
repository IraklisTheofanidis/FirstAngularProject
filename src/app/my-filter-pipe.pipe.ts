import { IBook } from './books';
import { Pipe, PipeTransform } from '@angular/core';
import { MyLibraryComponent } from './components/my-library/my-library.component';

@Pipe({
  name: 'fresh'
  
})
export class MyFilterPipePipe implements PipeTransform {

  transform(value:any,filterInt:number){
    if(value.length===0){
      return value;
    }
    const books=[];
    for(const book of value){
      if(book['userId']===filterInt){
        books.push(book);
      }
    }
    return books;
  }

}



