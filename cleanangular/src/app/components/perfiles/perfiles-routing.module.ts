import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosPerfilComponent } from './usuarios-perfil/usuarios-perfil.component';
const routes: Routes = [
  { path: '', component:  UsuariosPerfilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilesRoutingModule { }
