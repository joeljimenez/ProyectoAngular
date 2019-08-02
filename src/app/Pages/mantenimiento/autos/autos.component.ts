import { Component, OnInit } from '@angular/core';
import { AutoModel } from '../../../models/autos.models';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {

  autos: AutoModel = {
    marca: '',
    modelo: '',
    anio: '',
    img: '',
    estado: true,
  }
  error : true;
  exito : false;
  constructor() { }

  ngOnInit() {
  }

}
