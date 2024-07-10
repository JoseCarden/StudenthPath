import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http'; // Asegúrate de importar HttpClientModule si no está

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.page.html',
  styleUrls: ['./chat-bot.page.scss'],
})
export class ChatBotPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private http: HttpClient // Agregar el módulo HttpClient
  ) { }

  ngOnInit() {
  }

  goToNotasPon() {
    this.navCtrl.navigateForward('/notas-pon');
  }

  goToDeserAnual() {
    this.navCtrl.navigateForward('/deser-anual');
  }

  goToEstudiAnual() {
    this.navCtrl.navigateForward('/estudi-anual');
  }
  goToNotasDesertores() {
    window.open('http://localhost:8080/pentaho/content/saiku-ui/index.html?biplugin5=true&dimension_prefetch=false#query/open/%3Ahome%3Aconsultas%3Anotas-desertores.saiku', '_blank');
  }
  
  goToMuestraTotal() {
    this.navCtrl.navigateForward('/muestra-total');
  }

}
