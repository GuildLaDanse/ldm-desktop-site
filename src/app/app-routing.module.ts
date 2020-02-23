import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MenuPageComponent} from './modules/menu/pages/menu-page/menu-page.component';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {TokenDebugComponent} from './modules/debug/pages/token-debug/token-debug.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {Auth0HttpInterceptor} from './infrastructure/Auth0HttpInterceptor';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuPageComponent },
  { path: 'welcome', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: Auth0HttpInterceptor,
    multi: true
  }],
})
export class AppRoutingModule { }
