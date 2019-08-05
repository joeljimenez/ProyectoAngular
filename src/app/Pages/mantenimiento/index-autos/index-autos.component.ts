import { Component, OnInit } from '@angular/core';
import { AutosService } from 'src/app/Service/service.index';
import { Auto } from 'src/app/models/autos.models';

@Component({
  selector: 'app-index-autos',
  templateUrl: './index-autos.component.html',
  styleUrls: ['./index-autos.component.css']
})
export class IndexAutosComponent implements OnInit {
  autos: Auto;

  public res: any = {
    exito: '', 
    token: '',
    autos: '',
  }

  constructor(private _service: AutosService) {
    this.llenar_tabla();
  }

  ngOnInit() { 
  }

  llenar_tabla() {
    this._service.get_autos().subscribe((data) => {
      this.res = data;
      this.autos = this.res.autos;
      console.log(this.autos);
    })
  }

}
 