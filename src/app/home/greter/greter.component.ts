import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-greter',
  imports: [],
  templateUrl: './greter.component.html',
  styleUrl: './greter.component.css'
})
export class GreterComponent {
  message = input('default message');
  // @Input({ required: true }) message!: string;
}
