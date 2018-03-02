import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  title: string = "안녕하세요";
  public menus = [
    {
      title:"Component",
      code:'01'
    }
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl:ModalController) {
    //
  }
gotoMenu(menu){
  if(menu.code == '01'){
    this.navCtrl.push('ComponentPage');
  }
}
modal(){
  let modal = this.modalCtrl.create("ModalPage");
  modal.onDidDismiss(data=>{
    console.log(data);
  });
  modal.present();
}


}
