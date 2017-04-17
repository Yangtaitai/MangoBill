import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-bill',
  templateUrl: 'bill.html'
})
export class BillPage {

    public firstParam:any;
    public secondParam:any;

  constructor(public navCtrl: NavController, public params:NavParams) {
        this.firstParam = params.get("firstPassed");
        this.secondParam = params.get("secondPassed");
  }

  ionViewDidLoad(){
      console.log("Hello Bill page");
  }
}
