import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  city: string;
  state: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.get('location').then(val => {
      if(val != null){
        let location = JSON.parse(val);
        this.state = location.state;
        this.city = location.city;
      }else{
        let location = {
          state: 'RS',
          city : 'Kragujevac'
        }
        this.state = location.state;
        this.city = location.city;
      }
  });

}
