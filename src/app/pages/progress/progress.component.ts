import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  val = 5;

  constructor() {
  }

  ngOnInit(): void {
    const interval = setInterval(() => {
      this.val += 14;

      if (this.val > 100) {
        this.val = 100;
        clearInterval(interval);
      }
    }, 1000);
  }

}
