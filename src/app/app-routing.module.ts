import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MenuPageComponent} from './menu/pages/menu-page/menu-page.component';
import {WelcomeComponent} from './welcome/welcome.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuPageComponent },
  { path: 'welcome', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
