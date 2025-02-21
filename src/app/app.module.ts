import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ProductViewerComponent } from './components/product-viewer/product-viewer.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { CartViewerComponent } from './components/cart-viewer/cart-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductViewerComponent,
    NavComponent,
    ProductViewComponent,
    CartViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
