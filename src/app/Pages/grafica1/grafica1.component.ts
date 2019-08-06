import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js'; 
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Service/Productos/product.service';




@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component implements OnInit {
 
  graficos_Array: any[] = [];

  graficos: any = {
    'grafico1': {
      'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      'data':  [24, 30, 41],
      'type': 'doughnut',
      'leyenda': 'El pan se come con'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Entrevistados'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'leyenda': '¿Le dan gases los frijoles?'
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data':  [85, 15],
      'type': 'doughnut',
      'leyenda': '¿Le importa que le den gases?'
    },
  };
  imagenSubir: File;
  imagenTemp: string | ArrayBuffer;
 id:string;
  constructor( private _params: ActivatedRoute , private _service: ProductService) { 
  // tranforma en objeti en una array de objetos
  let grafo = Object.values(this.graficos);
  this.graficos_Array = grafo;
  this.id = _params.snapshot.paramMap.get('id');


  }

  ngOnInit() {
  }



  
 
}
