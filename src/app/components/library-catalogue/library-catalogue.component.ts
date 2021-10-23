import { Component, OnInit } from '@angular/core'
import { RestService } from 'src/app/services/rest.service'
import { baseapi } from 'src/app/services/config'

@Component({
  selector: 'app-library-catalogue',
  templateUrl: './library-catalogue.component.html',
  styleUrls: ['./library-catalogue.component.scss']
})
export class LibraryCatalogueComponent implements OnInit {
  //books: Book[] = []
  books: any = []

  constructor (private RestService: RestService) {}

  ngOnInit (): void {
    this.loadData()
  }

  public loadData () {
    this.RestService.get(baseapi + 'books').subscribe(resp => {
      this.books = resp
    })
  }
}
