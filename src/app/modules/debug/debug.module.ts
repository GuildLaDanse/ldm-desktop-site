import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenDebugComponent } from './pages/token-debug/token-debug.component';
import { DebugComponent } from './debug.component';
import {DebugRoutingModule} from './debug-routing.module';

@NgModule({
  declarations: [TokenDebugComponent, DebugComponent],
  imports: [
    CommonModule,
    DebugRoutingModule
  ]
})
export class DebugModule { }
