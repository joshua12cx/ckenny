import { Product } from '../../core/index-model';
import { ProductoService } from './../../core/service/producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrl: './listar-producto.component.css'
})
export class ListarProductoComponent implements OnInit {
  productos: Product [] = []
  busqueda : string = '';
 constructor(private ProductoService: ProductoService){ }

 ngOnInit(): void {
   this.ProductoService.getProductos().subscribe(
    (data : Product[]) => {
     this.productos = data;
    },
    
   )
 }
}
