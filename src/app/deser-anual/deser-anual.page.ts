import { Component, OnInit, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-deser-anual',
  templateUrl: './deser-anual.page.html',
  styleUrls: ['./deser-anual.page.scss'],
})
export class DeserAnualPage implements OnInit {

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
      <iframe src="http://localhost:8080/pentaho/content/saiku-ui/index.html?biplugin5=true&dimension_prefetch=false#query/open/%3Ahome%3Aconsultas%3Anombre-carrera.saiku" style="width:100%; height:1100px; border:none;"></iframe>
    `;
  }

  generatePDF() {
    const iframeSrc = 'http://localhost:8080/pentaho/content/saiku-ui/index.html?biplugin5=true&dimension_prefetch=false#query/open/%3Ahome%3Aconsultas%3Anombre-carrera.saiku';
  
    // Abrir una nueva ventana para cargar el contenido del iframe
    const newWindow = window.open(iframeSrc);
  
    // Verificar si se pudo abrir la nueva ventana
    if (newWindow) {
      // Esperar a que se cargue el contenido en la nueva ventana
      newWindow.onload = () => {
        setTimeout(() => {
          // Capturar el contenido de la ventana como HTML
          const htmlContent = newWindow.document.documentElement.innerHTML;
  
          // Crear un documento PDF con jspdf
          const pdf = new jspdf.jsPDF();
          pdf.html(htmlContent, {
            callback: (pdf) => {
              pdf.save('grafico.pdf');
              newWindow.close(); // Cerrar la ventana después de guardar el PDF
            }
          });
        }, 1000); // Ajusta el tiempo de espera según sea necesario
      };
    } else {
      console.error('No se pudo abrir la nueva ventana.');
    }
  }

}
