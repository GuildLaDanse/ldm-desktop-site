import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MenuPageComponent} from './modules/menu/pages/menu-page/menu-page.component';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {TokenDebugComponent} from './modules/debug/pages/token-debug/token-debug.component';


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
