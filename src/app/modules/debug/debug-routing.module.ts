import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DebugComponent} from './debug.component';
import {TokenDebugComponent} from './pages/token-debug/token-debug.component';

const routes: Routes = [
  {
    path: 'debug',
    component: DebugComponent,
    children: [
      {
        path: 'token',
        component: TokenDebugComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebugRoutingModule {
}
