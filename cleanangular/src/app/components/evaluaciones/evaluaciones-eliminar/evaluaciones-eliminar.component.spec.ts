import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionesEliminarComponent } from './evaluaciones-eliminar.component';

describe('EvaluacionesEliminarComponent', () => {
  let component: EvaluacionesEliminarComponent;
  let fixture: ComponentFixture<EvaluacionesEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluacionesEliminarComponent]
    });
    fixture = TestBed.createComponent(EvaluacionesEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
