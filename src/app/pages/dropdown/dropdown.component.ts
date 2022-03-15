import {Component, OnInit} from '@angular/core';

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
  cols = [
    {field: 'name', header: 'name', width: 150},
    {field: 'type', header: 'type', width: 200},
    {field: 'description', header: 'Description'}
  ];
  data = [
    {
      name: 'showclear',
      type: 'Input<boolean>',
      description: 'show a clear button if options is selected.'
    },
    {
      name: 'label',
      type: 'Input<string>',
      description: 'The property name to display in dropdown options.'
    },
    {
      name: 'value',
      type: 'Input<any>',
      description: 'The property name used as value on select.'
    },
    {
      name: 'placeholder',
      type: 'Input<string>',
      description: 'show a default word before selection.'
    },
    {
      name: 'options',
      type: 'Input<Array>',
      description: 'An array of objects to populate the dropdown options.'
    },
    {
      name: 'selectChange',
      type: 'Output<any>',
      description: 'Emit a value on every selection, the type is based on value property.'
    }
  ];


  styleCols = [
    {field: 'name', header: 'name', width: 250},
    {field: 'value', header: 'default', width: 250},
    {field: 'description', header: 'Description'}
  ]
  styleData = [
    {
      name: '--alta-dropdown-bg',
      value: 'white',
      description: 'the background of the dropdown'
    } ,
    {
      name: '--alta-dropdown-color',
      value: '#444',
      description: 'the text color of the dropdown'
    } ,
    {
      name: '--alta-dropdown-min-width',
      value: '12rem',
      description: 'min width '
    }
  ]
  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(e: any) {
    this.selectedCountry = e.detail;
  }
}
