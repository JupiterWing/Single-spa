import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar-primary-nav',
  templateUrl: './primary-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimaryNavComponent {
  links = [
    {
      label: 'HOME',
      url: '/home',
    },
    {
      label: 'CONFIGURE',
      url: '/configure',
    }, {
      label: 'ANALYZE',
      url: '/analyze',
    }, {
      label: 'INTERPRET',
      url: '/interpret',
    }, {
      label: 'JOURNAL',
      url: '/journal',
    },
    // {
    //   label: 'Noop zone application',
    //   url: '/noop-zone',
    // },
  ];

  constructor(private router: Router) {}

  route(url: string): void {
    this.router.navigateByUrl(url);
  }
}
