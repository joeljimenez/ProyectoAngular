import { Component, OnInit } from '@angular/core'; 
import { SettingsService } from '../../Service/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _ajustes: SettingsService) { 
 
  }
// hay dos forma para tener referencia de una etiqueta html
  ngOnInit() {
    this.colocarCheck();
  }
  cambiarColor(color: string , link: any) {
    console.log(link);
    this.AplicarCheck(link);
    this._ajustes.aplicarTema(color);
 
  }

  AplicarCheck(link: any) {
     let selectores: any = document.getElementsByClassName('selector');
        for (let ref of selectores) {
           ref.classList.remove('working');
              link.classList.add('working');
          }
  }

  colocarCheck() {
    let selectores: any = document.getElementsByClassName('selector'); 

     let tema = this._ajustes.ajustes.tema;

    for (let ref of selectores) {
console.log(ref);
           if ( ref.getAttribute('data-theme') === tema ) { 
              
                ref.classList.add('working');
                break;
           }
    }
  }
}
