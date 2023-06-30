import { Component } from '@angular/core';
import { EvaluacionService } from 'src/app/services/evaluacion.service';

@Component({
  selector: 'app-evaluaciones-crear',
  templateUrl: './evaluaciones-crear.component.html',
  styleUrls: ['./evaluaciones-crear.component.css']
})
export class EvaluacionesCrearComponent {
  comentario: string = '';
  calificacion: number = 0;

  constructor(private evaluacionService: EvaluacionService) { }

  publicarEvaluacion() {
  console.log('Calificación:', this.calificacion);
  console.log('Comentario:', this.comentario);
    this.evaluacionService.crearEvaluacion(this.calificacion, this.comentario)
      .subscribe({
        next: (response: any) => {
          console.log('Evaluación creada:', response);
        },
        error: (error: any) => {
          console.error('Error al crear evaluación:', error);
        }
      });
      this.comentario='';
      this.calificacion=0;
  }
}