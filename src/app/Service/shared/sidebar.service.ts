import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
menu: any = [
  {
    titulo: 'Home',
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
    titulo: 'Mantenimiento',
    icono: 'mdi mdi-pencil',
    submenu: [
       {
         titulo: 'Crear Usuarios',
         url: '/usuarios',
         icono: 'fa fa-user'
       }
       ,
       {
        titulo: 'Crear Productos',
        url: '/index_productos',
        icono: 'fa fa-product-hunt',
      } 
      ,
      {
       titulo: 'Crear Categorias',
       url: '/categorias',
       icono: 'fa fa-product-hunt',
     },
     {
       titulo: 'Crear Autos',
       url: '/autos',
       icono : ' fa fa-product-hunt'
     },
     {
      titulo: 'Crear Marcas',
      url: '/marcas',
      icono : ' fa fa-product-hunt'
    }
    ]
  }
];





  constructor() { }
}
