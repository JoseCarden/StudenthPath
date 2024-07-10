import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.page.html',
  styleUrls: ['./chat-bot.page.scss'],
})
export class ChatBotPage {
  response: string = '';

  constructor(private navCtrl: NavController) {}

  selectOption(option: string) {
    switch (option) {
      case 'A':
        this.response = 'Respuesta A';
        break;
      case 'B':
        this.response = 'Respuesta B';
        break;
      case 'C':
        this.response = 'Respuesta C';
        break;
      default:
        this.response = '';
        break;
    }
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
