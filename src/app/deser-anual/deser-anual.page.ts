import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-deser-anual',
  templateUrl: './deser-anual.page.html',
  styleUrls: ['./deser-anual.page.scss'],
})
export class DeserAnualPage implements OnInit {

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
