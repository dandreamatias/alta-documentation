import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NavService} from '../nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit {

  constructor(public navService: NavService) {
  }

  ngOnInit(): void {
  }

  onMenuClick() {
    this.navService.open$.next(false);
  }
}
