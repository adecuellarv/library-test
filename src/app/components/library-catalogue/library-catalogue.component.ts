import { Component, OnInit } from '@angular/core'
import { Book } from '../../models/books'

@Component({
  selector: 'app-library-catalogue',
  templateUrl: './library-catalogue.component.html',
  styleUrls: ['./library-catalogue.component.scss']
})
export class LibraryCatalogueComponent implements OnInit {
  books: Book[] = []

  constructor () {}

  ngOnInit (): void {
    this.books = [
      {
        id: 1,
        title: 'What if?',
        author: 'Henrry H',
        yearPublised: '2018',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione enim, placeat quis dolores temporibus rem? Mollitia dolorum dignissimos placeat amet, iusto error facere tempora nulla, et, aut architecto expedita adipisci!'
      },
      {
        id: 2,
        title: 'Glyph',
        author: 'Tomas H',
        yearPublised: '2017',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione enim, placeat quis dolores temporibus rem? Mollitia dolorum dignissimos placeat amet, iusto error facere tempora nulla, et, aut architecto expedita adipisci!'
      }
    ]
  }
}
