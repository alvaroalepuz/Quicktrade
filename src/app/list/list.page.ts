import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { IProducto, IMotor, IInmobiliaria, ITecnologia, IMegusta } from '../Interfaces';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {


  productos: (IProducto | IInmobiliaria | IMotor | ITecnologia | IMegusta)[];
  megusta: (IMegusta)[];
  nombreusuario: string="Alvaro";
  nombre: string="ORdenador";
  id: number=1;

  constructor(private _activatedRoute: ActivatedRoute, private _productoservice: ProductoService,public alertController: AlertController) {
  }

  ngOnInit() {
    this.productos = this._productoservice.getProductos();
  }
  async Megusta() {

    let megusta: IMegusta = {
      "id": this.id,
      "nombreP": this.nombre,
      "nombreusuario": this.nombreusuario,
    }
    this._productoservice.setproducto(megusta);
this.alerta();
  };
  async alerta(): Promise<void> {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atencion',
      message: 'Se ha añadido un Megusta a la base de datos.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}