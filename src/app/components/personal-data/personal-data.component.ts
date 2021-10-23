import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {

  constructor() { }

  islogged: boolean = false
  
  ngOnInit(): void {
    if(localStorage.getItem('token')) this.islogged = true
    else {
      this.islogged = false
      window.location.href = '/login';
    }
  }

}
