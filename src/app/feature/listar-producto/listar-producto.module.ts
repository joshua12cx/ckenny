import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarProductoRoutingModule } from './listar-producto-routing.module';
import { ListarProductoComponent } from './listar-producto.component';
import { SearchComponent } from '../../shared/components/search/search.component';
import { CardComponent } from '../../shared/components/card/card.component';

import { FilterProductPipe } from '../../core/pipe/filter-product.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarProductoComponent,
    
  ],
 
  imports: [
    CommonModule,
    ListarProductoRoutingModule,
    SearchComponent,
    CardComponent,
    FormsModule,
    FilterProductPipe
  ]
})
export class ListarProductoModule { 

}
