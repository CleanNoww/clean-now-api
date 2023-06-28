import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionesModificarComponent } from './evaluaciones-modificar.component';

describe('EvaluacionesModificarComponent', () => {
  let component: EvaluacionesModificarComponent;
  let fixture: ComponentFixture<EvaluacionesModificarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluacionesModificarComponent]
    });
    fixture = TestBed.createComponent(EvaluacionesModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
