import {Component} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent  {
  cssValiables: string[] = [
    '--padding: 1rem 1.5rem;',
    '--default-bg: white;'
  ];
}
