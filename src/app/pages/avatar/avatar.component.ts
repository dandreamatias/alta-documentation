import {Component, OnInit} from '@angular/core';
import {COLUMNS} from '../../utils/constants';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  cols = COLUMNS;
  data = [
    {
      name: 'image',
      type: 'string',
      description: 'the image will be used ad background avatar'
    },
    {
      name: 'label',
      type: 'string',
      description: 'The first char will be displayed in the Avatar'
    },
    {
      name: 'size',
      type: 'string',
      description: 'default is "m". Other options are "s" and "l"'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
