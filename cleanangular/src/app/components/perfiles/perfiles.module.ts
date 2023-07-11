import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilesRoutingModule } from './perfiles-routing.module';
import { UsuariosPerfilComponent } from './usuarios-perfil/usuarios-perfil.component';
import { MaterialModule } from 'src/app/material/material.module';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';

@NgModule({
  declarations: [
    UsuariosPerfilComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    PerfilesRoutingModule,
    MaterialModule,

  ]
})
export class PerfilesModule { }
