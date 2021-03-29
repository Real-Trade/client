import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrdersComponent } from './orders/orders.component';
import { PortfolioFormComponent } from './portfolio-form/portfolio-form.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  
  {path:'create-portfolio', component:PortfolioFormComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'place-order',component:OrderFormComponent},
  {path:'orders',component:OrdersComponent},
  {path:'', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
