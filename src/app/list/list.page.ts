import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { IProducto, IMotor, IInmobiliaria, ITecnologia } from '../Interfaces';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {


  
productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[];
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;


  constructor(private _activatedRoute: ActivatedRoute, private _productoservice: ProductoService) {
  }

  ngOnInit() {
    let ref = this._productoservice.getProductos();
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        this.nombre = child.val().nombre;

      })
    })
    this.productos.push({
      "id": this.productos.length + 1,
      "nombre": this.nombre,
      "descripcion": this.descripcion,
      "precio": this.precio,
      "categoria": this.categoria,
    })
  }
}