import { Pipe, PipeTransform } from '@angular/core';

interface Product {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    Category;
  images:      string[];
}

interface Category {
  id:    number;
  name:  string;
  image: string;
}

@Pipe({
  name: 'filterProduct',
  standalone: true,
})
export class FilterProductPipe implements PipeTransform {

  transform(products: Product[], searchText: string): Product[] {
    if(products.length == 0) return products;
    if(searchText == '') return products;

    return products.filter(product => product.title.includes(searchText)) ||
      products.filter(product => product.description.includes(searchText)) ||
      products.filter(product => product.price.toString().includes(searchText)) ||
      products.filter(product => product.description.includes(searchText)) ||
      products.filter(product => product.category.name.includes(searchText))
    ;
  }

}
