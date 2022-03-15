import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  cols = [
    {field: 'id', header: 'Id', width: 100},
    {field: 'field2', header: 'Name', sortable: true},
    {field: 'field3', header: 'Surname'}
  ];
  data = [
    {
      id: 1,
      field2: 'Pippo',
      field3: 'rossi'
    },
    {
      id: 3,
      field2: 'Paperino',
      field3: 'rossi'
    },
    {
      id: 32,
      field2: 'Mario',
      field3: 'rossi'
    },
    {
      id: 55,
      field2: 'Gianni',
      field3: 'rossi'
    },
    {
      id: 89,
      field2: 'Marco',
      field3: 'rossi'
    }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
