import { AgregarProductoModule } from './../../feature/agregar-producto/agregar-producto.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {path: 'listar-producto',
        loadChildren: () => import('../../feature/listar-producto/listar-producto.module').then(m => m.ListarProductoModule)
      },
      {path: 'agregar-producto',
        loadChildren: () => import('../../feature/agregar-producto/agregar-producto.module').then(m => m.AgregarProductoModule)
      },
      {
        path:'**',
        redirectTo: 'listar-producto',       

      }
      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
