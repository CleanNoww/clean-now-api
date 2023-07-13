import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LimpiezaComponent } from './limpieza.component';

const routes: Routes = [{ path: '', component: LimpiezaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LimpiezaRoutingModule { }
