import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = signal("My Title");
  title2 = "Not a signal";
  message = input("Default message");
}
