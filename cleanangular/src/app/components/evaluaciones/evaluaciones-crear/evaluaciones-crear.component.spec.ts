import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionesCrearComponent } from './evaluaciones-crear.component';

describe('EvaluacionesCrearComponent', () => {
  let component: EvaluacionesCrearComponent;
  let fixture: ComponentFixture<EvaluacionesCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluacionesCrearComponent]
    });
    fixture = TestBed.createComponent(EvaluacionesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
