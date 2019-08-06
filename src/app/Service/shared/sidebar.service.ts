import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
menu: any = [
  {
    titulo: 'Inicio',
    icono: 'mdi mdi-gauge',
    submenu: [
       {
         titulo: 'Dashboard',
         url: '/Dashboard',
         icono: 'fa fa-wrench'
       }
    ]
  },
  {
    titulo: 'Sitio Web',
    icono: 'mdi mdi-pencil',
    submenu: [
       {
         titulo: 'Usuarios',
         url: '/usuarios',
         icono: 'fa fa-user'
       }
       ,
       {
        titulo: 'Productos',
        url: '/index_productos',
        icono: 'fa fa-product-hunt',
      } 
      ,
      {
       titulo: 'Categorías',
       url: '/categorias',
       icono: 'fa fa-product-hunt',
     },
     {
       titulo: 'Autos',
       url: '/autos',
       icono : ' fa fa-product-hunt'
     },
     {
      titulo: 'Marcas',
      url: '/marcas',
      icono : ' fa fa-product-hunt'
    }
    ]
  }
];





  constructor() { }
}
