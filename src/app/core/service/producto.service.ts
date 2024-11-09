import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
   private apiUrl = environment.API_URL;

constructor(private http: HttpClient){}

getProductos(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl+'/v1/products');
    
} 

}