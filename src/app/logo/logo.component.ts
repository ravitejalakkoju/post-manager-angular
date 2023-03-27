import { Component, Input } from '@angular/core';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html'
})
export class LogoComponent {
  @Input() url: string = '';
}
