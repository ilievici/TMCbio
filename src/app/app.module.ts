import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LangComponent } from './components/lang/lang.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { OrderComponent } from './components/order/order.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { TRANSLATION_PROVIDERS, } from './translate/translation';
import { TranslatePipe } from './translate/translate.pipe';
import { TranslateService } from './translate/translate.service';

import { ProductService } from './services/product.service';
import { OrderService } from './services/order.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LangComponent,
    AboutComponent,
    ContactsComponent,
    OrderComponent,
    ProductsComponent,
    ProductDetailComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),

    AppRoutingModule
  ],
  providers: [
    TRANSLATION_PROVIDERS,
    TranslateService,
    ProductService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
