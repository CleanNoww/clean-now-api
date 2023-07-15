import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpiadoresComponent } from './limpiadores.component';

describe('LimpiadoresComponent', () => {
  let component: LimpiadoresComponent;
  let fixture: ComponentFixture<LimpiadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LimpiadoresComponent]
    });
    fixture = TestBed.createComponent(LimpiadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
