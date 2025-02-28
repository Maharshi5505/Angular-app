import { Component, input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-greter',
  imports: [],
  templateUrl: './greter.component.html',
  styleUrl: './greter.component.css'
})
export class GreterComponent {
  message = input('default message');
  @Output() newItemEvent = new EventEmitter<string>();

addNewItem(value: string){
  this.newItemEvent.emit(value);
}
  // @Input({ required: true }) message!: string;
}
