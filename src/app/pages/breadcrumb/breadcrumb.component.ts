import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  items = [
    {label: 'Home', value: ''},
    {label: 'Documents', value: 'docs'},
    {label: 'Detail', value: 'docs/12'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
