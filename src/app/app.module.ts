import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MatButtonModule } from '@angular/material/button'
//import { MatRaisedButtonModule } from '@angular/material/raised'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { LibraryCatalogueComponent } from './components/library-catalogue/library-catalogue.component'
import { BookComponent } from './components/book/book.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LibraryCatalogueComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
