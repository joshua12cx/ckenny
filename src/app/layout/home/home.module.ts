import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { FloatLabelComponent } from '../../shared/components/float-label/float-label.component';
import { SearchComponent } from '../../shared/components/search/search.component';
import { FilterProductPipe } from '../../core/pipe/filter-product.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    FilterProductPipe,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderComponent,
    CardComponent,
    FloatLabelComponent,
    SearchComponent,
  ]
})
export class HomeModule { }
