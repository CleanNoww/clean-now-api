import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evaluacion } from 'src/app/model/evaluacion';
import { EvaluacionService } from 'src/app/services/evaluacion.service';

@Component({
  selector: 'app-evaluaciones-modificar',
  templateUrl: './evaluaciones-modificar.component.html',
  styleUrls: ['./evaluaciones-modificar.component.css']
})
export class EvaluacionesModificarComponent implements OnInit {
  evaluacion: Evaluacion = {
    id_evaluacion: 0,
    calificacion: 0,
    comentario: '',
    cliente: {
      id_cliente: 0,
      dni: 99999999,
      nombre_completo: '',
      email: '',
      password: '',
      tipoRegistro: 'correo electronico',
      direccion: '',
      historialReservas: [],
      historialEvaluaciones: []
    },
    limpiador: {
      id_limpiador:0,
      dni:0,
      edad:0,
      nombre_completo:'',
      email:'',
      contraseña:'',
      tipoRegistro:'',
      num_servicios:0,
      telefono:'',
      descripcion:'',
      calificacion:0,
      reservas:[],
      evaluaciones:[],
      tipoLimpieza:[],
  }
  }
  
  constructor(
    private evaluacionService: EvaluacionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

  }

  actualizarEvaluacion(): void {
    this.evaluacionService.actualizarEvaluacion(4,this.evaluacion).subscribe(
      (evaluacion: Evaluacion) => {
        console.log('Evaluación actualizada exitosamente');
        // Realizar cualquier otra acción después de actualizar la evaluación si es necesario
        this.router.navigate(['/evaluaciones']);
      },
      (error: any) => {
        console.error('Error al actualizar la evaluación', error);
        // Manejar el error de actualización de la evaluación si es necesario
      }
    );
  }
}
