import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProductsComponent } from './products/products.component';



const routes: Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'test/:id',
    component: ProductsComponent
  },
  {
    path: 'register',
    component: RegisterFormComponent
  },  
  {
    path: 'products',
    component: ProductsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
