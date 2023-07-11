import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluacionesCrearComponent } from './evaluaciones-crear/evaluaciones-crear.component';
import { EvaluacionesModificarComponent } from './evaluaciones-modificar/evaluaciones-modificar.component';
import { EvaluacionesEliminarComponent } from './evaluaciones-eliminar/evaluaciones-eliminar.component';
import {EvaluacionesVisualizarComponent}from'./evaluaciones-visualizar/evaluaciones-visualizar.component'


const routes: Routes = [
  {path:'',component:EvaluacionesCrearComponent},
  {path:'evaluaciones-visualizar',component:EvaluacionesVisualizarComponent},
  {path:'evaluaciones-eliminar',component:EvaluacionesEliminarComponent},
  {path:'evaluaciones-modificar',component:EvaluacionesModificarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluacionesRoutingModule { }
