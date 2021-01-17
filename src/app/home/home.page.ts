import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

cat : string = "Categoria";
tipo : string="number";
ocultarTecno : boolean = false;
ocultarMotor : boolean = false;
ocultarInmobiliaria : boolean = false;

  constructor() {}

cambiar_oculto(){

  this.ocultarInmobiliaria=!this.ocultarInmobiliaria;
}
cambiar_oculto2(){
  this.ocultarMotor=!this.ocultarMotor;
}
cambiar_oculto3(){
  this.ocultarTecno=!this.ocultarTecno;
}


}
