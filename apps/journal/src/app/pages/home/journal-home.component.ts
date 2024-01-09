import { Component } from '@angular/core';

@Component({
  selector: 'journal-home',
  template: '{{ title }}',
  standalone: true,
})
export class JournalHomeComponent {
  title = 'This is the home page of Journal application.';
}
