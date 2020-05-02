import { Component, OnInit, ɵConsole } from '@angular/core';
import { DatosusuarioService } from '../datosusuario.service';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listadatos;
  listaalbums;
  listafotos;
  listabtns;
  constructor(
    public datos: DatosusuarioService,
    public actionSheetController: ActionSheetController,
    public Router: Router
  ) {}

  ngOnInit() {
    this.cargarInfo();
  }

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
        this.presentActionSheet(id);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  

  async presentActionSheet(id) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Álbums de ' + this.listadatos[id - 1].name,
      buttons:
        this.createButtons(),
    });
    await actionSheet.present();
  }

  createButtons() {
    const buttons = [];
    this.listaalbums.forEach(album => {
      const btn = {
        text: 'Álbum ' + album.id,
        icon: 'albums',
        handler: () => {
          this.Router.navigate(['/photos/' + album.userId + '/' + album.title]);
        }
      };
      buttons.push(btn);
      const btnCancel = {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel'
      };
      buttons.push(btnCancel);
    });
    return buttons;
  }
}
