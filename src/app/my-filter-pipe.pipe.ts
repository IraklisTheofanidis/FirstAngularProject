import { IBook } from './books';
import { Pipe, PipeTransform } from '@angular/core';
import { MyLibraryComponent } from './components/my-library/my-library.component';

@Pipe({
  name: 'fresh'
})
export class MyFilterPipePipe implements PipeTransform {

  transform(books: IBook[], filterInt: number) {
    return books.filter(book => book.userId === filterInt);
  }

}
