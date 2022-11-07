import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContenComponent } from './components/conten/conten.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { LoginComponent } from './components/login/login.component';
<<<<<<< HEAD
=======
import { FormsModule } from '@angular/forms';
>>>>>>> cec67601acb4a202730fd5d9f0672693bd4148b5
import { RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContenComponent,
    FooterComponent,
    AllProductsComponent,
    DetailProductComponent,
    LoginComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
    RouterModule.forRoot([{ path: 'home', component: ContenComponent }]),
=======
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'products/:id',
        component: DetailProductComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ]),
>>>>>>> cec67601acb4a202730fd5d9f0672693bd4148b5
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
