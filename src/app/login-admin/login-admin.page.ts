import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { LoginAdministradorService } from './login-admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
})
export class LoginAdminPage implements OnInit {
  correo: string = '';
  usuario: string = '';
  clave: string = '';
  nuevaClave: string = '';

  constructor(
    private navCtrl: NavController,
    private loginAdminService: LoginAdministradorService,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  iniciarSesion() {
    const adminData = {
      Correo: this.correo,
      Usuario: this.usuario,
      Clave: this.clave,
    };

    this.loginAdminService.validarCredenciales(adminData).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        if (response.autenticado) {
          // Si las credenciales son correctas, navegar a la siguiente página
          this.navCtrl.navigateForward('/seleccion');
        } else {
          console.error('Credenciales incorrectas');
          // Mostrar mensaje de error al usuario
        }
      },
      (error) => {
        console.error('Error en la solicitud:', error);
        // Manejo de errores, por ejemplo, mostrar un mensaje al usuario
      }
    );
  }

  async mostrarVentanaCambioClave() {
    const alert = await this.alertController.create({
      header: 'Cambiar Clave',
      inputs: [
        {
          name: 'correo',
          type: 'text',
          value: this.correo, // Mostrar el correo actual
          disabled: true, // Desactivar la edición del correo
        },
        {
          name: 'nuevaClave',
          type: 'password',
          placeholder: 'Nueva Clave',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Cambiar',
          handler: (data) => {
            // Llamar a la función para cambiar clave con el correo y nueva clave
            this.cambiarClave(this.correo, data.nuevaClave);
          },
        },
      ],
    });

    await alert.present();
  }

  cambiarClave(correo: string, nuevaClave: string) {
    this.loginAdminService.cambiarClave(correo, nuevaClave).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        if (response.actualizado) {
          // Mostrar mensaje de éxito o navegar a otra página
          console.log('Clave cambiada exitosamente');
          // Ejemplo de cómo podrías navegar a otra página
          // this.navCtrl.navigateForward('/nueva-pagina');
        } else {
          console.error('Error al cambiar la clave:', response.mensaje);
          // Mostrar mensaje de error al usuario
        }
      },
      (error) => {
        console.error('Error en la solicitud:', error);
        // Manejo de errores, por ejemplo, mostrar un mensaje al usuario
      }
    );
  }
}
