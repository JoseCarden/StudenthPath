import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notas-pon',
  templateUrl: './notas-pon.page.html',
  styleUrls: ['./notas-pon.page.scss'],
})
export class NotasPonPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  // goToPanelControl(){
  //   this.navCtrl.navigateForward('/panel-control');
  // }
  // goToEstadisticas(){
  //   this.navCtrl.navigateForward('/estadisticas');
  // }
  // goToListaClips(){
  //   this.navCtrl.navigateForward('/lista-clips');
  // }
}
