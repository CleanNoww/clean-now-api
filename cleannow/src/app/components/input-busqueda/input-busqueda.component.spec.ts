import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBusquedaComponent } from './input-busqueda.component';

describe('InputBusquedaComponent', () => {
  let component: InputBusquedaComponent;
  let fixture: ComponentFixture<InputBusquedaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputBusquedaComponent]
    });
    fixture = TestBed.createComponent(InputBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
