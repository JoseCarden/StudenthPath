import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-estudi-anual',
  templateUrl: './estudi-anual.page.html',
  styleUrls: ['./estudi-anual.page.scss'],
})
export class EstudiAnualPage implements OnInit {

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
