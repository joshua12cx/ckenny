import { Product } from './../../../core/model/producto.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  standalone: true,
   imports: []
})
export class CardComponent {
@Input() producto!: Product;
}
