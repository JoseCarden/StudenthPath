import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.page.html',
  styleUrls: ['./seleccion.page.scss'],
})
export class SeleccionPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToNotasPon(){
    this.navCtrl.navigateForward('/notas-pon');
  }
  goToDeserAnual(){
    this.navCtrl.navigateForward('/deser-anual');
  }
  goToEstudiAnual(){
    this.navCtrl.navigateForward('/estudi-anual');
  }
}
