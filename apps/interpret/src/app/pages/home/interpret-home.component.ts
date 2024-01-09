import { Component } from '@angular/core';

@Component({
  selector: 'interpret-home',
  template: '{{ title }}',
  standalone: true,
})
export class InterpretHomeComponent {
  title = 'This is the home page of Interpret application.';
}
