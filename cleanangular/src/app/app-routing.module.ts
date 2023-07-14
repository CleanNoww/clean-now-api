import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'evaluaciones', loadChildren: () => import('./components/evaluaciones/evaluaciones.module').then(m => m.EvaluacionesModule) },
  {path: 'usuarios',loadChildren: () => import('./components/usuarios/usuarios.module').then(m => m.UsuariosModule)},
  {path: 'perfiles',loadChildren: () => import('./components/perfiles/perfiles.module').then(m => m.PerfilesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
