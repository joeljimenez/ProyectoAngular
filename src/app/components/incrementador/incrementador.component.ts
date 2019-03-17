import { Component, OnInit, Input, Output , EventEmitter, ViewChild, ElementRef } from '@angular/core';
 

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
}) 
export class IncrementadorComponent implements OnInit {
@ViewChild('txtProgress') txtProgress: ElementRef; // ya tengo una referencia en cualquier modulo
@Input('nombre') leyenda: string = 'Leyenda';
@Input() porcentaje: number = 50;
@Input() porcentajeMax: number = 100;
@Input() porcentajeMin: number = 0;

@Output() cambioValor: EventEmitter<number> = new EventEmitter(); 
// Manera que se hace para emitir un valor con output
  constructor() {
  } 

  ngOnInit() {
  }
  Incrementar() {
    if (this.porcentaje >= this.porcentajeMax ) {
      this.porcentaje = 100;
      return;
    }  
      this.porcentaje = this.porcentaje + 2;
    this.cambioValor.emit(this.porcentaje);
    this.txtProgress.nativeElement.focus();

  }
  Decrementar() {
    if (this.porcentaje <= this.porcentajeMin) {
      this.porcentaje = 0;
     return;
    } 
       this.porcentaje = this.porcentaje - 2;
    this.cambioValor.emit(this.porcentaje); 
    this.txtProgress.nativeElement.focus();
  
  }

onChange( newValue: number ) {

  if (newValue > 100) {
    this.porcentaje = 100;
 }   else if (newValue < 0 || newValue == null) {
  this.porcentaje = 0;
} 
this.txtProgress.nativeElement.value = this.porcentaje;
this.cambioValor.emit(this.porcentaje); 
  }
}
