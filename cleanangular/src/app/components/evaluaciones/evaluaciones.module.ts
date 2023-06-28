import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluacionesRoutingModule } from './evaluaciones-routing.module';
import { EvaluacionesCrearComponent } from './evaluaciones-crear/evaluaciones-crear.component';
import { EvaluacionesModificarComponent } from './evaluaciones-modificar/evaluaciones-modificar.component';
import { EvaluacionesEliminarComponent } from './evaluaciones-eliminar/evaluaciones-eliminar.component';


@NgModule({
  declarations: [
    EvaluacionesCrearComponent,
    EvaluacionesModificarComponent,
    EvaluacionesEliminarComponent
  ],
  imports: [
    CommonModule,
    EvaluacionesRoutingModule
  ]
})
export class EvaluacionesModule { }
