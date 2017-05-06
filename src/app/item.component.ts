import { Component,Input,Output,EventEmitter } from '@angular/core';
import {Item} from './models/item';

@Component({
  selector : 'item-detail',
  templateUrl: './item.component.html',
  styleUrls: ['./app.component.css']
})
export class ItemComponent {
@Input() item : Item;
@Output() onGetDetail=new EventEmitter();  

 getDetails(event) {
    event.preventDefault();
    this.onGetDetail.emit(this.item);

  }

}