import {Component, ViewEncapsulation} from '@angular/core';
import {NavService} from './nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(public navService: NavService) {
  }

 async onMaskClick() {
    this.navService.open$.next(false)
  }
}
