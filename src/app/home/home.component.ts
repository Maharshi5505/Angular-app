import { Component, input, signal } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { GreterComponent } from './greter/greter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CounterComponent, GreterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  message = signal('Hello, form home, for greter...!');
  message2 = signal("Hello , form home, for counter...!");

  list = ['banana', 'mango', 'watermelon'];

  addItem(newItem: string){
    this.list.push(newItem);
  }
}
