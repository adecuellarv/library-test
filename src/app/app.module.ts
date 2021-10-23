import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatTreeModule} from '@angular/material/tree'
import { StoreModule } from '@ngrx/store'
import { singleBookReducer } from './singleBook.reducer'
//import { MatRaisedButtonModule } from '@angular/material/raised'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { LibraryCatalogueComponent } from './components/library-catalogue/library-catalogue.component'
import { BookComponent } from './components/book/book.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingleBookComponent } from './components/single-book/single-book.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LibraryCatalogueComponent,
    BookComponent,
    SingleBookComponent,
    CreateAccountComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatAutocompleteModule,
    MatTreeModule,
    StoreModule.forRoot({singleBookReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
