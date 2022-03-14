import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NavService} from '../nav.service';
import packageJson from '../../../package.json';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {
  packageJson = packageJson

  constructor(private navService: NavService) { }

  ngOnInit(): void {
  }

  onMenuClick() {
    this.navService.open$.next(true);
  }
}
