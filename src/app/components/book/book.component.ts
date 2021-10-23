import { isNgTemplate } from '@angular/compiler'
import { Component, Input, OnInit } from '@angular/core'
import { Book } from 'src/app/models/books'
import { Store } from '@ngrx/store'
import { RestService } from 'src/app/services/rest.service'
import { baseapi } from 'src/app/services/config'
import { selectBook } from '../../singleBook.actions'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: Book = new Book()

  constructor (
    private store: Store<{ singleBookReducer: object }>,
    private RestService: RestService
  ) {
    store.select('singleBookReducer')
  }

  ngOnInit (): void {
    this.loadData()
  }

  onShow (book: Book) {
    this.store.dispatch(selectBook(book))
  }

  onAdd (book: Book) {
    if (localStorage.getItem('token')) {
      const userid = localStorage.getItem('userid')
      this.RestService.getbooksuser(baseapi + 'booksuser/' + userid).subscribe(
        resp => {
            if(!resp){
              localStorage.setItem('count-books', '0');
            }
            if (resp.length < 3) {
              this.RestService.postbooksuser(baseapi + 'book-to-user', {
                idbook: book.idbook,
                iduser: userid
              }).subscribe(sbresp => {
                localStorage.setItem('count-books', resp.length + 1);
                window.location.reload();
              })
            }else alert('supero prestamos')
        }
      )
    } else {
      window.location.href = '/login'
    }
    //alert('necesitas crear cuenta')
  }

  public loadData () {}
}
