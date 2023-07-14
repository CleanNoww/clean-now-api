import { Component, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'evaluaciones-dialog',
  templateUrl: 'evaluaciones-dialog.component.html',
  styleUrls: ['evaluaciones-dialog.component.css'],
})
export class EvaluacionesDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EvaluacionesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public evaluacionId: number
  ) {}

  eliminarEvaluacion(): void {
    this.dialogRef.close(this.evaluacionId);
  }
}
