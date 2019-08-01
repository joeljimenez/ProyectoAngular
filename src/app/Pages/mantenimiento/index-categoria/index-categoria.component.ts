import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/Service/categoria/categorias.service';
import { Categoria } from 'src/app/models/categoria.model';


@Component({
  selector: 'app-index-categoria',
  templateUrl: './index-categoria.component.html',
  styleUrls: ['./index-categoria.component.css']
})
export class IndexCategoriaComponent implements OnInit {

  constructor(private _service: CategoriasService) {
    this.get_all_categoria();
  }

  ngOnInit() {
  }
  categoria: Categoria;

  public res: any = {
    exito: '',
    token: '',
    categories: '',
  }

  get_all_categoria() {
    this._service.get_categorias().subscribe((data) => {
      this.res = data;
      this.categoria = this.res.categories;
    });
  }

  eliminar(id: string) {
    this._service.delete(id).subscribe((data) => {
      console.log(data);
      this.get_all_categoria();
    });
  }

}
