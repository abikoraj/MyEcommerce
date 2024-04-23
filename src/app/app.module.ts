import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

import { HttpClientModule } from '@angular/common/http'
import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { AboutComponent } from './components/pages/about/about.component';
import { SliderComponent } from './components/partials/slider/slider.component';
import { ProductsComponent } from './components/partials/products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SingleProductComponent } from './components/pages/single-product/single-product.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "shop", component: ShopComponent },
      { path: "about", component: AboutComponent },
      { path: "product", component: SingleProductComponent }
    ]

  }

]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ShopComponent,
    HomeComponent,
    AboutComponent,
    SliderComponent,
    ProductsComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
