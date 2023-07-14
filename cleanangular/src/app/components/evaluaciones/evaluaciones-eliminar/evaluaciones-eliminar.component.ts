import { Component, OnInit } from '@angular/core';
import { EvaluacionService } from 'src/app/services/evaluacion.service';
import { Evaluacion } from 'src/app/model/evaluacion';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EvaluacionesDialogComponent } from '../evaluaciones-dialog/evaluaciones-dialog.component';

@Component({
  selector: 'app-evaluaciones-eliminar',
  templateUrl: './evaluaciones-eliminar.component.html',
  styleUrls: ['./evaluaciones-eliminar.component.css'],
})
export class EvaluacionesEliminarComponent implements OnInit {
  evaluaciones: Evaluacion[] = [];

  constructor(private evaluacionService: EvaluacionService, private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.obtenerEvaluaciones();
  }

  obtenerEvaluaciones(): void {
    this.evaluacionService.obtenerEvaluaciones().subscribe(
      (evaluaciones: Evaluacion[]) => {
        this.evaluaciones = evaluaciones;
      },
      (error: any) => {
        console.error('Error al obtener las evaluaciones', error);
      }
    );
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, evaluacionId: number): void {
    const dialogRef = this.dialog.open(EvaluacionesDialogComponent, {
      width: '250px',
      data: evaluacionId,
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.eliminarEvaluacion(result);
      }
    });
  }

  eliminarEvaluacion(idEvaluacion: number): void {
    this.evaluacionService.eliminarEvaluacion(idEvaluacion).subscribe(
      () => {
        console.log('Evaluación eliminada exitosamente');
        // Realizar cualquier otra acción después de eliminar la evaluación si es necesario
      },
      (error) => {
        console.error('Error al eliminar la evaluación', error);
        // Manejar el error de eliminación de la evaluación si es necesario
      }
    );
  }
  navigateToModificarEvaluacion(): void {
    this.router.navigate(['/evaluaciones/evaluaciones-modificar']);
  }

}
