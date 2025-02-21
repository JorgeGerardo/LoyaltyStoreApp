import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductViewerComponent } from './components/product-viewer/product-viewer.component';
import { loginActiveGuard } from './Guard/login-active.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'product-viewer', component: ProductViewerComponent, canActivate: [loginActiveGuard]},
  {path: '**', pathMatch:'full', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
