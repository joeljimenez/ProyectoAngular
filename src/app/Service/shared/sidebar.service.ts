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
       ,
       {
        titulo: 'ProgressBar',
        url: '/Progress',
        icono: 'fa fa-minus',
      }
      , 
      {
        titulo: 'Graficas',
        url: '/Grafica',
        icono: 'fa fa-pie-chart',
      }
      ,
    ]
  }
];





  constructor() { }
}
