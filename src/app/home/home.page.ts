import { Component } from '@angular/core';
import { DatosusuarioService } from '../datosusuario.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listadatos;
  listaalbums;
  listafotos;
  constructor(public datos: DatosusuarioService) {}

  cargarInfo() {
    this.datos.obtenerinformacionuser().subscribe(
      (data) => {
        this.listadatos = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cargaralbums(id) {
    this.datos.obteneralbumsuser(id).subscribe(
      (data) => {
        this.listaalbums = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cargarfotos(id) {
    this.datos.obtenerfotosalbum(id).subscribe(
      (data) => {
        this.listafotos = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
