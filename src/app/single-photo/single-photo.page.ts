import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatosusuarioService } from '../datosusuario.service';

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.page.html',
  styleUrls: ['./single-photo.page.scss'],
})
export class SinglePhotoPage implements OnInit {
  fotoTitle;
  fotoObj;
  fotoObjTitle;
  fotoObjUrl;
  constructor(
    public datos: DatosusuarioService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.fotoTitle = this.actRoute.snapshot.paramMap.get('photoTitle');
    this.cargarfoto(this.fotoTitle);
  }

  cargarfoto(title) {
    this.datos.obtenerfoto(title).subscribe(
      (data) => {
        this.fotoObj = data[0];
        this.fotoObjTitle = this.fotoObj.title;
        this.fotoObjUrl = this.fotoObj.url;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
