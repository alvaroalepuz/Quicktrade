import { Component } from '@angular/core';
import{IProducto} from  '../Interfaces'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cat: string = "Categoria";
  tipo: string = "number";
  categoria: string = 'categoria';


  nombre: string;
  descripcion: string;
  precio: string;

  productos: IProducto[] = [
    {
      "id": 1,
      "nombre": "casa",
      "descripcion": "Casa a las afueras",
      "precio": 500
    },
    {
      "id": 2,
      "nombre": "Ordenador",
      "descripcion": "Casa a las afueras",
      "precio": 500
    }
  
  
  
  ];





  constructor() { }




}
