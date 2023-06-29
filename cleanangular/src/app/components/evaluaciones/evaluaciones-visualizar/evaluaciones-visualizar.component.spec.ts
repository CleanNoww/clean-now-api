import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionesVisualizarComponent } from './evaluaciones-visualizar.component';

describe('EvaluacionesVisualizarComponent', () => {
  let component: EvaluacionesVisualizarComponent;
  let fixture: ComponentFixture<EvaluacionesVisualizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluacionesVisualizarComponent]
    });
    fixture = TestBed.createComponent(EvaluacionesVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
