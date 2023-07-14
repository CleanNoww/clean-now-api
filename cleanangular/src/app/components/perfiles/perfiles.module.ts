import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilesRoutingModule } from './perfiles-routing.module';
import { UsuariosPerfilComponent } from './usuarios-perfil/usuarios-perfil.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    UsuariosPerfilComponent,

  ],
  imports: [
    CommonModule,
    PerfilesRoutingModule,
    MaterialModule,

  ]
})
export class PerfilesModule { }
