import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  /*===================================
  PROPIEDADES POR DEFECTOS
  ===================================*/
ajustes: Ajustes = {
  temUrl: 'assets/css/colors/default.css',
  tema: 'default',
};



  constructor(@Inject(DOCUMENT) private _document) {
    this.CargarAjustes();
   }
  GuardarAjustes() {
 /*===================================
LOCALSTORAGE SOLO GUARDA STRING Y PARA PODER GUARDAR UN ARREGLO SE COLOCA JSON.STRINGIFY()
  ===================================*/
    localStorage.setItem('Ajustes', JSON.stringify(this.ajustes));
}
  CargarAjustes() {
  // preguntando si en el localstorage este ajustes
if (localStorage.getItem('Ajustes')) {
  console.log('cargando del localstorage');
  this.ajustes = JSON.parse(localStorage.getItem('Ajustes'));
  this.aplicarTema(this.ajustes.tema);
  } else {
    this.aplicarTema(this.ajustes.tema);
    console.log('Usando valores por defecto');
  }
}

aplicarTema (color: string) {

  let url = `assets/css/colors/${ color }.css`;
  this._document.getElementById('tema').setAttribute('href', url);
// servicios
  this.ajustes.tema = color;
  this.ajustes.temUrl = url;
  this.GuardarAjustes();
}

}

interface Ajustes {
temUrl: string;
tema: string;
}
