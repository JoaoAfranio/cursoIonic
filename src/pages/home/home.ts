import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

texto = "Isso daqui é um texto";
  constructor(public navCtrl: NavController) {

  }

  alteraTexto(){
    this.texto = "Texto Alterado com sucesso";
  }
  
  alteraPagina(){
    this.navCtrl.push("page-pagina2");
  }
}