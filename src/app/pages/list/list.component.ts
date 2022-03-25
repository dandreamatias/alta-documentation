import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items = ['do something', 'buy milk', 'call to info']
  constructor() { }

  ngOnInit(): void {
  }

}
