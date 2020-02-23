import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DebugModule } from './debug.module';
import { DebugComponent } from './debug.component';
import { TokenDebugComponent } from './pages/token-debug/token-debug.component';

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
export class DebugRoutingModule { }
