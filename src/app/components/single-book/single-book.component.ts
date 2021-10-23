import { Component, OnInit } from '@angular/core'
import { Book } from 'src/app/models/books'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { cleanBook } from '../../singleBook.actions'

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {
  bookInfo$: Observable<object>

  bookInfoObj: Book[] = []

  constructor (private store: Store<{ singleBookReducer: object }>) {
    this.bookInfo$ = store.select('singleBookReducer')
  }

  onCleanSingle () {
    //this.store.dispatch(selectBook(this.bookInfoObj[0]))
    this.store.dispatch(cleanBook())
  }

  ngOnInit (): void {
    this.bookInfo$.subscribe((data: any) => {
      this.bookInfoObj = [data]
    })
  }

  onAdd (book: Book) {
    if(localStorage.getItem('token')){
      alert('checkar cuantos libros tengo')
    }else{
      window.location.href = '/login';
    }
  }
}
