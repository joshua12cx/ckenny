import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarProductoRoutingModule } from './agregar-producto-routing.module';
import { AgregarProductoComponent } from './agregar-producto.component';


@NgModule({
  declarations: [
    AgregarProductoComponent
  ],
  imports: [
    CommonModule,
    AgregarProductoRoutingModule
  ]
})
export class AgregarProductoModule { }
