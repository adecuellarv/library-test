import { Component, OnInit } from '@angular/core'
import { RestService } from 'src/app/services/rest.service'
import { FormControl, Validators } from '@angular/forms'
import { baseapi } from 'src/app/services/config'

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  //email = new FormControl('', [Validators.required, Validators.email]);
  name: string = ''
  lastname: string = ''
  phone: string = ''
  email: string = ''
  password: string = ''
  haserrors: boolean = false
  constructor (private RestService: RestService) {}

  /*
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }*/

  onKeyName (event: any) {
    this.name = event.target.value
    this.haserrors = false
  }
  onKeyLastName (event: any) {
    this.lastname = event.target.value
    this.haserrors = false
  }
  onKeyPhone (event: any) {
    this.phone = event.target.value
    this.haserrors = false
  }
  onKeyEmail (event: any) {
    this.email = event.target.value
    this.haserrors = false
  }
  onKeyPassword (event: any) {
    this.password = event.target.value
    this.haserrors = false
  }

  createAccount () {
    if (
      this.name &&
      this.lastname &&
      this.phone &&
      this.email &&
      this.password
    ) {
      this.haserrors = false
      this.RestService.postca(baseapi + 'new-user', {
        firstname: this.name,
        lastname: this.lastname,
        phone: this.phone,
        email: this.email,
        paswd: this.password
      }).subscribe(resp => {
        console.log(resp)
        //this.books = resp
      })
    } else this.haserrors = true
  }

  ngOnInit (): void {
    /*
    this.http.post<any>('https://reqres.in/api/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
        this.postId = data.id;
    })*/
  }
}
