import { Component, OnInit, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-notas-pon',
  templateUrl: './notas-pon.page.html',
  styleUrls: ['./notas-pon.page.scss'],
})
export class NotasPonPage implements OnInit {

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
      <iframe src="http://localhost:8080/pentaho/content/saiku-ui/index.html?biplugin5=true&dimension_prefetch=false#query/open/%3Ahome%3Aconsultas%3Aescala.saiku" style="width:100%; height:1100px; border:none;"></iframe>
    `;
  }

  llevarP() {
    const iframeSrc = 'http://localhost:8080/pentaho/content/saiku-ui/index.html?biplugin5=true&dimension_prefetch=false#query/open/%3Ahome%3Aconsultas%3Aescala.saiku';
  }
}
