import { Component, OnInit } from '@angular/core';
import { IProducto, IMotor, IInmobiliaria, ITecnologia } from '../Interfaces';
import { ProductoService } from '../services/producto.service';



@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
  styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {

  constructor( private _productoservice : ProductoService) {}
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[] = [];

  ngOnInit() {
  }

  async insertar() {

    let producto: IProducto = {
      "id": this.productos.length + 1,
      "nombre": this.nombre,
      "descripcion": this.descripcion,
      "precio": this.precio,
      "categoria": this.categoria
    }
   this._productoservice.setproducto(producto);
  
  };
 



}
