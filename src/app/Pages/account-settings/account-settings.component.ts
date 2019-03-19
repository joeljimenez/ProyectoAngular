import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document) { }
// hay dos forma para tener referencia de una etiqueta html
  ngOnInit() {
  }
  cambiarColor(color: string , link: any) {
    console.log(link);
this.AplicarCheck(link);
    let url = `assets/css/colors/${ color }.css`;
    this._document.getElementById('tema').setAttribute('href', url);

  }

  AplicarCheck(link: any) {
     let selectores: any = document.getElementsByClassName('selector');
        for (let ref of selectores) {
           ref.classList.remove('working');
              link.classList.add('working');
          }
  }
}
