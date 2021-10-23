import { Component, OnInit } from '@angular/core'
import { RestService } from 'src/app/services/rest.service'
import { baseapi } from 'src/app/services/config'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = ''
  password: string = ''
  haserrors: boolean = false
  msgerror: string = ''
  constructor (private RestService: RestService) {}

  ngOnInit (): void {}

  onKeyEmail (event: any) {
    this.email = event.target.value
    this.haserrors = false
  }
  onKeyPassword (event: any) {
    this.password = event.target.value
    this.haserrors = false
  }
  loggin () {
    if (this.email && this.password) {
      this.haserrors = false
      this.RestService.postca(baseapi + 'login', {
        email: this.email,
        paswd: this.password
      }).subscribe(resp => {
        if (resp.code === 200) {
          this.msgerror = ''
          localStorage.setItem('userid', resp.data.iduser)
          localStorage.setItem('token', resp.data.sessiontoken)
          window.location.href = '/datos-personales'
        } else if (resp.code === 400) {
          this.msgerror = resp.description
        }
      })
    }else{
      this.haserrors = true
    }
  }
}
