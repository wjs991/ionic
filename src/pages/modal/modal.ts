import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  public profile = {
    actionSwicth: false,
    name: '',
    gender: '',
    location: '',
    startTime: ''
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewctrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  close() {
    this.viewctrl.dismiss();
  }
  save(){
    this.viewctrl.dismiss(this.profile);
  }
}
