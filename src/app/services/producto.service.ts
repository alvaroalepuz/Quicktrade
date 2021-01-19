import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { IProducto, IMotor, IInmobiliaria, ITecnologia, IMegusta } from '../Interfaces';

@Injectable()
export class ProductoService {

    productos: (IProducto | IInmobiliaria | IMotor | ITecnologia | IMegusta)[] = [

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

    getProductos(): (IProducto | IInmobiliaria | IMotor | ITecnologia | IMegusta)[] {
        return this.productos;
    }

    getProducto(id: number): (IProducto | IInmobiliaria | IMotor | ITecnologia | IMegusta) {
        return this.productos.find(x => x.id == id);
    }
    constructor(private _db: AngularFireDatabase) {

    }

    setproducto(producto: (IProducto | IInmobiliaria | IMotor | ITecnologia | IMegusta)) {

        let ref = this._db.database.ref("megusta");
        let res = ref.push(producto);
        res.key


    }
}