import { Component, input, signal } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { GreterComponent } from './greter/greter.component';

@Component({
  selector: 'app-home',
  imports: [CounterComponent, GreterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  message = signal('Hello, form home...!');
}
