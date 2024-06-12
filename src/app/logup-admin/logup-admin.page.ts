import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-logup-admin',
  templateUrl: './logup-admin.page.html',
  styleUrls: ['./logup-admin.page.scss'],
})
export class LogupAdminPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goToHome(){
    this.navCtrl.navigateForward('/home');
  }
}
