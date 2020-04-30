import { Component } from '@angular/core';
import { DatosusuarioService } from '../datosusuario.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listadatos;
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
}
