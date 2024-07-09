import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LogupAdministradorService } from './logup-admin.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-logup-admin',
  templateUrl: './logup-admin.page.html',
  styleUrls: ['./logup-admin.page.scss'],
})
export class LogupAdminPage implements OnInit {
  correo: string = '';
  usuario: string = '';
  clave: string = '';

  constructor(private navCtrl: NavController, private logupAdminService: LogupAdministradorService) { }

  ngOnInit() {
  }

  registrar() {
    const newAdmin = {
      Correo: this.correo,
      Usuario: this.usuario,
      Clave: this.clave
    };

    this.logupAdminService.registrarAdmin(newAdmin).subscribe(response => {
      console.log('Admin registrado', response);
      this.navCtrl.navigateForward('/home');
    }, error => {
      console.error('Error registrando admin', error);
    });
  }
}
