import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id: number;

  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;


  constructor(private _activatedRoute: ActivatedRoute, private _productoservice: ProductoService) { }

  ngOnInit() {

    this.id = +this._activatedRoute.snapshot.paramMap.get('id');


    this.id = this._productoservice.getProducto(this.id).id;
    this.nombre = this._productoservice.getProducto(this.id).nombre;
    this.descripcion = this._productoservice.getProducto(this.id).descripcion;
    this.precio = this._productoservice.getProducto(this.id).precio;
    this.categoria = this._productoservice.getProducto(this.id).categoria;



  }

}
