import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BillPage } from '../../pages/bill/bill';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  private billType: String;   // include two types[outcome,income]
  private billTag: String;   // include tags outcome[supermarket, beauty, clothes, rent ...] ; income[salary, gifts,...]
  private billSource: String;  // outcome[creditcard, checking, cash,...]; income[cash, checking,...]
  private date: Date;  
  private amount: number;
  private memo: String; // additional explanation 

  constructor(public navCtrl: NavController) {
    this.billType = 'Outcome';
    this.billTag = 'Beauty';
    this.billSource = 'cash';
    this.amount = 100;
    // this.date = '2017/04/15';
  }


  add(){
    this.navCtrl.push(BillPage,{
      firstPassed:"value 1",
      secondPassed:"value 2"
    });
  }
}
