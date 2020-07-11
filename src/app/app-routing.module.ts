import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MenuPageComponent} from './modules/menu/menu-page/menu-page.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {Auth0HttpInterceptor} from './infrastructure/Auth0HttpInterceptor';
import {AboutComponent} from './pages/about/about.component';
import {
  AuthGuardService as AuthGuard
} from './infrastructure/auth-guard/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuPageComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false, useHash: false})],
  exports: [RouterModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: Auth0HttpInterceptor,
    multi: true
  }],
})
export class AppRoutingModule { }
