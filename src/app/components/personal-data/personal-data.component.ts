import { Component, OnInit } from '@angular/core'
import { RestService } from 'src/app/services/rest.service'
import { baseapi } from 'src/app/services/config'

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  constructor (private RestService: RestService) {}

  userinfo: any = []
  islogged: boolean = false
  name: string = ''
  lastname: string = ''
  phone: string = ''
  email: string = ''
  password: string = ''
  haserrors: boolean = false

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

  ngOnInit (): void {
    if (localStorage.getItem('token')) {
      this.islogged = true
      this.loadData()
    } else {
      this.islogged = false
      window.location.href = '/login'
    }
  }

  public loadData () {
    const userid = localStorage.getItem('userid')
    if (userid) {
      this.RestService.getuser(baseapi + 'user/' + userid).subscribe(resp => {
        this.userinfo = resp

        this.name = resp.firstname
        this.lastname = resp.lastname
        this.phone = resp.phone
        this.email = resp.email
        this.password = resp.paswd
      })
    }
  }

  update () {
    const userid = localStorage.getItem('userid')
    if (
      userid &&
      this.name &&
      this.lastname &&
      this.phone &&
      this.email &&
      this.password
    ) {
      this.haserrors = false
      this.RestService.postca(baseapi + 'update-user/' + userid, {
        firstname: this.name,
        lastname: this.lastname,
        phone: this.phone,
        email: this.email,
        paswd: this.password
      }).subscribe(resp => {
        if (resp.code === 200) { alert('correctos')
          //localStorage.setItem('token', resp.token)
          //window.location.href = '/datos-personales'
        }
      })
    } else this.haserrors = true
  }
}
