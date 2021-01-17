import { Component } from '@angular/core';
import { IProducto, IMotor, IInmobiliaria, ITecnologia } from '../Interfaces';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cat: string = "Categoria";
  tipo: string = "number";

  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;

  tipos: string;
  km: number;
  anyo: number;

  m2: number;
  nbanyos: number;
  nhabitaciones: number;
  localidad: string;

  estado: string;

  productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[] = [];

  constructor(public alertController: AlertController) { }

  async alerta(): Promise<void> {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atencion',
      message: 'Se ha añadido un nuevo producto.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  async insertar() {

    switch (this.categoria) {
      case "motor":
        this.productos.push({
          "id": this.productos.length + 1,
          "nombre": this.nombre,
          "descripcion": this.descripcion,
          "precio": this.precio,
          "categoria": this.categoria,
          "tipo": this.tipo,
          "km": this.km,
          "anyo": this.anyo
        })
        this.alerta();
        break;
      case "inmobiliaria":
        this.productos.push({
          "id": this.productos.length + 1,
          "nombre": this.nombre,
          "descripcion": this.descripcion,
          "precio": this.precio,
          "categoria": this.categoria,
          "m2": this.m2,
          "nbanyos": this.nbanyos,
          "nhabitaciones": this.nhabitaciones,
          "localidad": this.localidad

        })
        this.alerta();
        break;
        case "tecnologia":
          this.productos.push({
            "id": this.productos.length + 1,
            "nombre": this.nombre,
            "descripcion": this.descripcion,
            "precio": this.precio,
            "categoria": this.categoria,
            "estado": this.estado
  
          })
          this.alerta();
        break;
    }
  }
}






  //async insertar() {
  //  this.productos.push({
  //  "id": this.productos.length + 1,
  //"nombre": this.nombre,
  //  "descripcion": this.descripcion,
  // "precio": this.precio,
  // "categoria": this.categoria

  //})
  // const alert = await this.alertController.create({
  //   cssClass: 'my-custom-class',
  //   header: 'Atencion',
  //   message: 'Se ha añadido un nuevo proucto.',
  //   buttons: ['Aceptar']
  // });

  // await alert.present();
