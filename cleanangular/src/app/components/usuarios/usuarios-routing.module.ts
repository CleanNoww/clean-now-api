import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosClientesRegistrarComponent } from './usuarios-clientes-registrar/usuarios-clientes-registrar.component';

const routes: Routes = [
  { path: '', component: UsuariosClientesRegistrarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
