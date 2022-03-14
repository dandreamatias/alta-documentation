import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  open$ = new BehaviorSubject<boolean>(false);

  constructor() { }
}
