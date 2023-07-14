import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/services/perfil.service';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-usuarios-perfil',
  templateUrl: './usuarios-perfil.component.html',
  styleUrls: ['./usuarios-perfil.component.css']
})
export class UsuariosPerfilComponent implements OnInit {
  cliente: Cliente={ 
    id_cliente: 0,
    dni: 99999999,
    nombre_completo: '',
    email: '',
    password: '',
    tipoRegistro: 'correo electronico',
    direccion: '',
    historialReservas: [],
    historialEvaluaciones: []
  };
  mostrarContrasena = false;
  constructor(private perfilService: PerfilService) { }

  ngOnInit(): void {
    this.obtenerCliente();
  }

  obtenerCliente(): void {
    const idCliente = 18;
    this.perfilService.obtenerCliente(idCliente)
      .subscribe(
        cliente => this.cliente = cliente,
        error => console.log(error)
      );
  }
  toggleMostrarContrasena(): void {
    this.mostrarContrasena = !this.mostrarContrasena;
  }
  
}