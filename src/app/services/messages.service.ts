import { Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: string [] = [];

  constructor() { }

  add(message: string) {
    this.messages.push(message);
    return of(this);
  }

  clear() {
    this.messages = [];
  }
}
