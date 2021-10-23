import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor () {}

  islogged: boolean = false
  countItems: string = ''

  ngOnInit (): void {
    const items = localStorage.getItem('count-books');
    if (items) {
      this.countItems = items
    }
    if (localStorage.getItem('token')) this.islogged = true
    else this.islogged = false
  }

  logout () {
    localStorage.removeItem('token')
    localStorage.removeItem('userid')
    localStorage.removeItem('count-books')
    window.location.href = '/'
  }
}
