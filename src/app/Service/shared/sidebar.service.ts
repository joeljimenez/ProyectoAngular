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
         url: '/create_user',
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
       url: '/create_categories',
       icono: 'fa fa-product-hunt',
     } 
    ]
  }
];





  constructor() { }
}
