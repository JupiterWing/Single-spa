import { Component } from '@angular/core';

@Component({
  selector: 'configure-home',
  template: '{{ title }}',
  standalone: true,
})
export class ConfigureHomeComponent {
  title = 'This is the home page of Configure application.';
}
