import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { IProducto, IMotor, IInmobiliaria, ITecnologia } from '../Interfaces';

@Injectable()
export class ProductoService {

    /* productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[] = [
 
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
     ]*/

    constructor(private _db: AngularFireDatabase) {

    }


    getProductos(): firebase.default.database.Reference {
        let ref = this._db.database.ref("productos");
        return ref;
        
    }

    /*getProducto(id: number): (IProducto | IInmobiliaria | IMotor | ITecnologia) {
        return this.productos.find(x => x.id == id);
    }*/

    setproducto(producto: (IProducto | IInmobiliaria | IMotor | ITecnologia)) {

        let ref = this._db.database.ref("productos");
        let res =ref.push(producto);
        res.key

    }



}