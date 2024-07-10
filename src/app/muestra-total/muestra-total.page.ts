import { Component, OnInit, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http'; // Asegúrate de importar HttpClientModule si no está

@Component({
  selector: 'app-muestra-total',
  templateUrl: './muestra-total.page.html',
  styleUrls: ['./muestra-total.page.scss'],
})
export class MuestraTotalPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private elRef: ElementRef, // Para manipular el DOM
    private http: HttpClient // Agregar el módulo HttpClient
  ) { }

  ngOnInit() {
    this.goToNotasDesertores(); // Llama a la función al inicializar la página
    this.goToCarrerasRegistradas(); // Llama a la función al inicializar la página
  }

  goToSeleccion() {
    this.navCtrl.navigateForward('/seleccion');
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
    const pentahoContainer = this.elRef.nativeElement.querySelector('#pentaho-container');
    pentahoContainer.innerHTML = `
      <iframe src="http://localhost:8080/pentaho/content/saiku-ui/index.html?biplugin5=true&dimension_prefetch=false#query/open/%3Ahome%3Aconsultas%3Aescala-estudiante.saiku" style="width:100%; height:1100px; border:none;"></iframe>
    `;
  }

  goToCarrerasRegistradas() {
    const pentahoContainer2 = this.elRef.nativeElement.querySelector('#pentaho-container-2');
    pentahoContainer2.innerHTML = `
      <iframe src="http://localhost:8080/pentaho/content/saiku-ui/index.html?biplugin5=true&dimension_prefetch=false#query/open/%3Ahome%3Aconsultas%3Acarreras-registradas.saiku" style="width:100%; height:1100px; border:none;"></iframe>
    `;
  }

  llevarP() {
    const iframeSrc = 'http://localhost:8080/pentaho/content/saiku-ui/index.html?biplugin5=true&dimension_prefetch=false#query/open/%3Ahome%3Aconsultas%3Aescala-estudiante.saiku';
    window.open(iframeSrc, '_blank');
  }
  llevarP2() {
    const iframeSrc = 'http://localhost:8080/pentaho/content/saiku-ui/index.html?biplugin5=true&dimension_prefetch=false#query/open/%3Ahome%3Aconsultas%3Acarreras-registradas.saiku';
    window.open(iframeSrc, '_blank');
  }
}
