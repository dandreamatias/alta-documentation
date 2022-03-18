import {Component, OnInit} from '@angular/core';
import {COLUMNS} from '../../utils/constants';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  options = [
    {label: 'Italy', value: 1},
    {label: 'France', value: 2},
    {label: 'Spain', value: 3},
    {label: 'England', value: 4},
    {label: 'Canada', value: 5},
    {label: 'Irland', value: 6}
  ];
  selectedCountry?: number;
  cols = COLUMNS;
  data = [
    {
      name: 'showclear',
      type: 'boolean',
      description: 'show a clear button if options is selected.'
    },
    {
      name: 'label',
      type: 'string',
      description: 'The property name to display in dropdown options.'
    },
    {
      name: 'value',
      type: 'string',
      description: 'The property name used as value on select.'
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'show a default word before selection.'
    },
    {
      name: 'options',
      type: 'Array',
      description: 'An array of objects to populate the dropdown options.'
    }
  ];


  styleCols = [
    {field: 'name', header: 'name'},
    {field: 'value', header: 'default'},
    {field: 'description', header: 'Description'}
  ];
  styleData = [
    {
      name: '--alta-dropdown-bg',
      value: 'white',
      description: 'the background of the dropdown'
    },
    {
      name: '--alta-dropdown-color',
      value: '#444',
      description: 'the text color of the dropdown'
    },
    {
      name: '--alta-dropdown-min-width',
      value: '12rem',
      description: 'min width '
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(e: any) {
    this.selectedCountry = e.detail;
  }
}
