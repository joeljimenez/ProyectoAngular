   import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  porcentaje1: number = 50;
  porcentaje2: number = 10;
porcentajeMax: number = 100;
porcentajeMin: number = 0;

  constructor() { }

  ngOnInit() {
  }
  
}
