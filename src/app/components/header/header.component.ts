import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  islogged: boolean = false
  
  ngOnInit(): void {
    if(localStorage.getItem('token')) this.islogged = true
    else this.islogged = false
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    window.location.href = '/';
  }

}
