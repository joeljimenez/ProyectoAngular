import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Service/service.index';
import { contacto } from '../../models/contactos.model';
import { pago } from 'src/app/models/pagos.models';

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

  public pago: any = {
    exito: '',
    contacto: ''
  }
  contact : contacto;
  pago_arr : pago;
  ngOnInit() {
    this._service.get_contactos().subscribe((data) => {
      this.res = data;
      this.contact = this.res.contacto;
      console.log(this.contact);
       
    });

    this._service.get_pago().subscribe((data)=>{
this.pago = data;
this.pago_arr  = this.pago .pago;

    })
  }

}
