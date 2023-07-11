import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { UsuariosClientesRegistrarComponent } from './usuarios-clientes-registrar/usuarios-clientes-registrar.component';

@NgModule({
  declarations: [
    UsuariosClientesRegistrarComponent,
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MaterialModule,
  ]
})
export class UsuariosModule { 
    
}
