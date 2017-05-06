import { Component, Output, EventEmitter } from '@angular/core';
import { Item } from './models/item';

@Component({
  selector: 'item-form',
  templateUrl: './itemForm.html',
  styleUrls: ['./app.component.css']
})
export class ItemFormComponent {
  private newItem: Item;
  @Output() onCreateObject = new EventEmitter();

  constructor()
  {
    this.resetItem();
  }
  createObject() {

    this.onCreateObject.emit(this.newItem);
    console.log('from from compoenent:'+this.newItem);

  }
  resetItem() {
    this.newItem = new Item({ reference :'', name:'', state: 0 });

  }

}