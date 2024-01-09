import { Component } from '@angular/core';

@Component({
  selector: 'analyze-home',
  template: '{{ title }}',
  standalone: true,
})
export class AnalyzeHomeComponent {
  title = 'This is the home page of Analyze Application.';
}
