import { Component, OnInit, ɵConsole } from '@angular/core';
import { DatosusuarioService } from '../datosusuario.service';
import { ActionSheetController } from '@ionic/angular';

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
    public actionSheetController: ActionSheetController
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

  async presentActionSheet(id) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Álbums de ' + this.listadatos[id - 1].name,
      buttons:
        this.createButtons(),
    });
    await actionSheet.present();
  }

  createButtons() {
    let buttons = [];
    this.listaalbums.forEach(album => {
      let btn = {
        text: 'Álbum ' + album.id,
        icon: 'albums',
        handler: () => {
          console.log('Si jala el album ' + album.id);
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
