import { isNgTemplate } from '@angular/compiler'
import { Component, Input, OnInit } from '@angular/core'
import { Book } from 'src/app/models/books'
import { Store } from '@ngrx/store'
import { selectBook } from '../../singleBook.actions'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: Book = new Book()

  constructor (private store: Store<{ singleBookReducer: object }>) {
    store.select('singleBookReducer')
  }

  ngOnInit (): void {}

  onShow (book: Book) {
    this.store.dispatch(selectBook(book))
  }

  onAdd (book: Book) {
    alert('necesitas crear cuenta')
  }
}
