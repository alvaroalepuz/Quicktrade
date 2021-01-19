import { Injectable } from '@angular/core';
import { IProducto, IMotor, IInmobiliaria, ITecnologia } from '../Interfaces';

@Injectable()
export class ProductoService {

    productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[] = [

        {
            "id": 1,
            "nombre": "Portatil",
            "descripcion": "Portatil HP",
            "categoria": "tecnologia",
            "precio": 500,
            "estado": "nuevo"

        },
        {
            "id": 2,
            "nombre": "Casa",
            "descripcion": "casa con piscina",
            "categoria": "Hogar",
            "precio": 56

        }
    ]
    getProductos(): (IProducto | IInmobiliaria | IMotor | ITecnologia)[] {
        return this.productos;
    }

    getProducto(id: number): (IProducto | IInmobiliaria | IMotor | ITecnologia) {
        return this.productos.find(x => x.id == id);
    }
}