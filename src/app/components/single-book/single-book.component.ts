import { Component, OnInit } from '@angular/core'
import { Book } from 'src/app/models/books'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { cleanBook } from '../../singleBook.actions'
import { RestService } from 'src/app/services/rest.service'
import { baseapi } from 'src/app/services/config'

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {
  bookInfo$: Observable<object>

  bookInfoObj: Book[] = []

  constructor (
    private store: Store<{ singleBookReducer: object }>,
    private RestService: RestService
  ) {
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
    if (localStorage.getItem('token')) {
      const userid = localStorage.getItem('userid')
      this.RestService.getbooksuser(baseapi + 'booksuser/' + userid).subscribe(
        resp => {
          if (!resp) {
            localStorage.setItem('count-books', '0')
          }
          if (resp.length < 3) {
            this.RestService.postbooksuser(baseapi + 'book-to-user', {
              idbook: book.idbook,
              iduser: userid
            }).subscribe(sbresp => {
              localStorage.setItem('count-books', resp.length + 1)
              window.location.reload()
            })
          } else alert('supero prestamos')
        }
      )
    } else {
      window.location.href = '/login'
    }
    //alert('necesitas crear cuenta')
  }
}
