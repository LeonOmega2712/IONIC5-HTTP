import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatosusuarioService } from '../datosusuario.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {
  id;
  title;
  listafotos;
  constructor(
    public datos: DatosusuarioService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('albumId');
    this.title = this.actRoute.snapshot.paramMap.get('albumTitle');
    this.cargarfotos(this.id);
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

  rutearFoto(fotoTitle) {
    this.router.navigate(['/single-photo/' + fotoTitle]);
  }
}
