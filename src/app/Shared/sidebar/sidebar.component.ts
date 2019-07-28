import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../Service/service.index';
import { LoginService } from 'src/app/Service/Login/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor( public _SidebarService: SidebarService ,private _service:LoginService) { }

  ngOnInit() {
  }

  public name = localStorage.getItem('nombre');


  salir(){
    this._service.salir();
  }
}
