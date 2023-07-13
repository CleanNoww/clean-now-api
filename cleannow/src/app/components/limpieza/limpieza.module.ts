import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LimpiezaRoutingModule } from './limpieza-routing.module';
import { LimpiezaComponent } from './limpieza.component';


@NgModule({
  declarations: [
    LimpiezaComponent
  ],
  imports: [
    CommonModule,
    LimpiezaRoutingModule
  ]
})
export class LimpiezaModule { }
