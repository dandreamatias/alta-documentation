import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  message: any;

  constructor() { }

  ngOnInit(): void {
  }

  onToastShow() {
    this.message = {
      text: 'this library can be used in any JS framework',
      title: 'Alta',
      type: 'success',
      closable: true,
      life: 3000,
    };
  }
}
