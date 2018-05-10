import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaPage } from '../lista/lista';
import { InstitucionalPage } from '../institucional/institucional';
import { ContatoPage } from '../contato/contato';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  lista(){
    this.navCtrl.push(ListaPage)
  }
  institucional(){
    this.navCtrl.push(InstitucionalPage)
  }
  contato(){
    this.navCtrl.push(ContatoPage)
  }
}
