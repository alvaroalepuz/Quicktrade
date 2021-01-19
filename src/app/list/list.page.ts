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


  constructor(private _activatedRoute: ActivatedRoute, private _productoservice: ProductoService) {
  }

  ngOnInit() {
    this.productos = this._productoservice.getProductos();
    
  }

}
