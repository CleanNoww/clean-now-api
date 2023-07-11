import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosClientesRegistrarComponent}from './usuarios-clientes-registrar.component';

describe(' UsuariosClientesRegistrarComponent', () => {
  let component:  UsuariosClientesRegistrarComponent;
  let fixture: ComponentFixture<UsuariosClientesRegistrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosClientesRegistrarComponent]
    });
    fixture = TestBed.createComponent( UsuariosClientesRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
