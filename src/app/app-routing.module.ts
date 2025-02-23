import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductViewerComponent } from './components/product-viewer/product-viewer.component';
import { loginActiveGuard } from './Guard/login-active.guard';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { CartViewerComponent } from './components/cart-viewer/cart-viewer.component';
import { StoreListComponent } from './components/store-list/store-list.component';
import { StoreInventaryViewerComponent } from './components/store-inventary-viewer/store-inventary-viewer.component';
import { EditInventaryComponent } from './components/edit-inventary/edit-inventary.component';
import { AddProductToStoreComponent } from './components/add-product-to-store/add-product-to-store.component';
import { EditStoreComponent } from './components/edit-store/edit-store.component';
import { AddStoreComponent } from './components/add-store/add-store.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'product-viewer', component: ProductViewerComponent, canActivate: [loginActiveGuard]},
  {path: 'product/:id', component: ProductViewComponent, canActivate: [loginActiveGuard]},
  {path: 'cart', component: CartViewerComponent, canActivate: [loginActiveGuard]},
  {path: 'store-list', component: StoreListComponent, canActivate: [loginActiveGuard]},
  {path: 'store-inventary/:storeId', component: StoreInventaryViewerComponent, canActivate: [loginActiveGuard]},
  {path: 'store-inventary-edit/:storeId', component: EditInventaryComponent, canActivate: [loginActiveGuard]},
  {path: 'add-stock/:storeId', component: AddProductToStoreComponent, canActivate: [loginActiveGuard]},
  {path: 'edit-store/:storeId', component: EditStoreComponent, canActivate: [loginActiveGuard]},
  {path: 'add-store', component: AddStoreComponent, canActivate: [loginActiveGuard]},
  {path: '**', pathMatch:'full', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
