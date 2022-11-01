import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContenComponent } from './components/conten/conten.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContenComponent,
    FooterComponent,
    AllProductsComponent,
    DetailProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
