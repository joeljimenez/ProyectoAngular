import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Service/service.index';
import { contacto } from '../../models/contactos.model';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private _service: UsuarioService) { }
  public res: any = {
    exito: '',
    contacto: ''
  }
  contact : contacto;
  ngOnInit() {
    this._service.get_contactos().subscribe((data) => {
      this.res = data;
      this.contact = this.res.contacto;
      console.log(this.contact);
       
    });
  }

}
