import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluacionesCrearComponent } from './evaluaciones-crear/evaluaciones-crear.component';
import { EvaluacionesModificarComponent } from './evaluaciones-modificar/evaluaciones-modificar.component';
import { EvaluacionesEliminarComponent } from './evaluaciones-eliminar/evaluaciones-eliminar.component';


const routes: Routes = [
  {path:'evaluaciones-crear',component:EvaluacionesCrearComponent},
  {path:'evaluaciones-eliminar',component:EvaluacionesEliminarComponent},
  {path:'',component:EvaluacionesModificarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluacionesRoutingModule { }
