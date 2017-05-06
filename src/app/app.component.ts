import { Component } from '@angular/core';
import { Item } from './models/item';
import {Config} from './config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string;
  private text: string;
  private collection: [Item];
  private newItem: Item;
  constructor() {
    this.title = Config.APP_TITLE;
    this.text = 'Un paragrtaphe ';
    this.collection = [
      new Item({ reference: '1234', name: 'haythem', state: 0 }),
      new Item({ reference: '1235', name: 'Mohamed', state: 1 }),
      new Item({ reference: '1236', name: 'Nabil', state: 2 })];
    this.resetItem();

  }
  resetItem() {
    this.newItem = new Item({ reference: '', name: '', state: 0 });

  }
  getDetails(event, parameter: string) {
    event.preventDefault();
    console.log(event);
    let element = event.target || event.srcElement || event.currentTarget;
    console.log(element.id);


  }

  createObject() {

    this.collection.push(this.newItem);
    this.resetItem();

  }
}
