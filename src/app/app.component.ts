import { Component } from '@angular/core';
import { Item } from './models/item';
import {Config} from './config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  private title: string;
  private text: string;
  private collection: [Item];
  constructor() {
    this.title = Config.APP_TITLE;
    this.text = 'Un paragrtaphe ';
    this.collection = [
      new Item({ reference: '1234', name: 'haythem', state: 0 }),
      new Item({ reference: '1235', name: 'Mohamed', state: 1 }),
      new Item({ reference: '1236', name: 'Nabil', state: 2 })];

  }

 onGetDetail(item : Item)
 {
   console.log(item);
 }
 onCreateObject(item : Item)
 {
  console.log('from app compoenent:');
   console.log('from app compoenent:'+item);
   this.collection.push(item);
 }

 
}
