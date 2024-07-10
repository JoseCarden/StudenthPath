import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.page.html',
  styleUrls: ['./seleccion.page.scss'],
})
export class SeleccionPage {

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private http: HttpClient
  ) {}

  goToNotasPon() {
    this.navCtrl.navigateForward('/notas-pon');
  }

  goToDeserAnual() {
    this.navCtrl.navigateForward('/deser-anual');
  }

  goToEstudiAnual() {
    this.navCtrl.navigateForward('/estudi-anual');
  }

  goToMuestraTotal() {
    this.navCtrl.navigateForward('/muestra-total');
  }

  goToChatBot() {
    this.navCtrl.navigateForward('/chat-bot');
  }

  async confirmLogout() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: '¿Deseas desloguearte?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Deslogueo cancelado');
          }
        },
        {
          text: 'Sí',
          handler: () => {
            console.log('Desloguearse y redirigir al Home');
            // Aquí iría la lógica para desloguearse, por ejemplo:
            // this.authService.logout(); // Suponiendo authService para el manejo de autenticación
            this.navCtrl.navigateForward('/home');
          }
        }
      ]
    });
    await alert.present();
  }

}
