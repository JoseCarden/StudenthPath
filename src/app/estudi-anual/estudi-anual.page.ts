import { Component, OnInit, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-estudi-anual',
  templateUrl: './estudi-anual.page.html',
  styleUrls: ['./estudi-anual.page.scss'],
})
export class EstudiAnualPage implements OnInit {

  constructor(private navCtrl: NavController, private elRef: ElementRef) { }

  ngOnInit() {
    this.goToNotasDesertores(); // Llama a la función al inicializar la página
  }

  goToSeleccion() {
    this.navCtrl.navigateForward('/seleccion');
  }

  goToNotasDesertores() {
    const pentahoContainer = this.elRef.nativeElement.querySelector('#pentaho-container');
    pentahoContainer.innerHTML = `
      <iframe src="http://localhost:8080/pentaho/content/saiku-ui/index.html?biplugin5=true&dimension_prefetch=false#query/open/%3Ahome%3Aconsultas%3Anotas-desertores.saiku" style="width:100%; height:1100px; border:none;"></iframe>
    `;
  }
}
