import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {
  inputValue = 'hello';
  constructor() { }

  ngOnInit(): void {
  }

  onChange($event: Event) {
    this.inputValue = ($event as CustomEvent).detail;
  }

  onClick() {
    console.log(this.inputValue)
  }
}
