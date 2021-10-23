import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyBooksComponent } from './components/my-books/my-books.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'crear-cuenta',
    component: CreateAccountComponent
  },
  {
    path: 'datos-personales',
    component: PersonalDataComponent
  },
  {
    path: 'mis-libros',
    component: MyBooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
