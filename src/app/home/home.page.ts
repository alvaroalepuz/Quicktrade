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

  productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[] = [
    {
      "id": 1,
      "nombre": "Casa",
      "descripcion": "casa con piscina",
      "categoria":"tecnologia",
      "precio":56,
      "estado":"nuevo"

    },
     {
      "id": 1,
      "nombre": "Casa",
      "descripcion": "casa con piscina",
      "categoria":"Hogar",
      "precio":56

    }
  ];

  constructor(public alertController: AlertController) { }


}