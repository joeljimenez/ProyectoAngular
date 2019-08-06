import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../models/categoria.model';
import { CategoriasService } from '../../../Service/categoria/categorias.service';
import { Router, ActivatedRoute } from '@angular/router';
import { rutaImagen } from '../../../URL/rutaImagen';
@Component({
  selector: 'app-create-categoria',
  templateUrl: './create-categoria.component.html',
  styleUrls: ['./create-categoria.component.css']
})
export class CreateCategoriaComponent implements OnInit {
  ruta = rutaImagen;

  public res: any = {
    exito: '',
    token: '',
    categories: '',
  }
  categoria: Categoria = {
    nombre: '',
    descripcion: '',
    estado: true,
    img: '',
    slug: ''
  }
  mensaje_error: string = "";
  error = true;

  mensaje_exito: string = "";
  exito = false;

  public actualizar = false;
  id: string;
  imagenSubir: File;
  imagenTemp: any;
  constructor(private _service: CategoriasService,
    private _router: Router,
    private _param: ActivatedRoute) {
    this.id = _param.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.one_categoria();
      this.actualizar = true;

    }
  }

  ngOnInit() {
  }

  guardar(categoria: Categoria) {
    if (this.id != null) {
      this._service.update_Categoria(categoria, this.id).subscribe((data) => {
        this.res = data;
        this.error = this.res.exito;
        this.exito = this.res.exito;
        if (this.res.exito) {

          this.mensaje_exito = 'Categoria Actualizada Correctamente';
          setTimeout(() => {
            this._router.navigate(['/categorias']);
            this.limpiar();
          }, 3000);
        } else {

          this.mensaje_error = this.res.err.message;
        }
      })
    } else {
      this._service.crear_categoria(categoria).subscribe((data) => {
        this.res = data;
        this.error = this.res.exito;
        this.exito = this.res.exito;
        if (this.res.exito) {

          this.mensaje_exito = 'Categoria Creada Correctamente';
          setTimeout(() => {
            this._router.navigate(['/categorias']);
            this.limpiar();
          }, 3000);
        } else {

          this.mensaje_error = this.res.err.message;
        }
      });
    }
  }
  limpiar() {
    this.categoria = {
      nombre: '',
      descripcion: '',
      estado: true,
      img: '',
      slug: ''
    }
  }

  one_categoria() {
    this._service.get_categoria_id(this.id).subscribe((data) => {
      this.res = data;
      this.categoria = this.res.categories;

    });
  }


  seleccionImage(archivo: File) {
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;



    const reader = new FileReader();
    reader.onload = e => this.imagenTemp = reader.result;

    reader.readAsDataURL(archivo);

  }
  subir_imagen() {
    this._service.update_imagen(this.imagenSubir, this.id);
  }
  


}
