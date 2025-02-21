import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ProductViewerComponent } from './components/product-viewer/product-viewer.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { CartViewerComponent } from './components/cart-viewer/cart-viewer.component';
import { AuthInterctorInterceptor } from './Interceptor/auth-interctor.interceptor';
import { StoreListComponent } from './components/store-list/store-list.component';
import { StoreInventaryViewerComponent } from './components/store-inventary-viewer/store-inventary-viewer.component';
import { EditInventaryComponent } from './components/edit-inventary/edit-inventary.component';
import { AddProductToStoreComponent } from './components/add-product-to-store/add-product-to-store.component';
import { EditStoreComponent } from './components/edit-store/edit-store.component';
import { AddStoreComponent } from './components/add-store/add-store.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductViewerComponent,
    NavComponent,
    ProductViewComponent,
    CartViewerComponent,
    StoreListComponent,
    StoreInventaryViewerComponent,
    EditInventaryComponent,
    AddProductToStoreComponent,
    EditStoreComponent,
    AddStoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterctorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
