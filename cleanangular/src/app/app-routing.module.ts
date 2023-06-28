import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
{path:'home',component:HomeComponent},
{path: 'evaluaciones', 
loadChildren: () => import('./components/evaluaciones/evaluaciones.module').then(m => m.EvaluacionesModule)
 }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
