import {Injectable} from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: string [] = [];

  constructor() {
  }

  add(message: string) {
    this.messages.push(message);
    return of(this);
  }

  clear() {
    this.messages = [];
  }

  /**
   * Handle operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): T => {
      console.error(error);
      this.add(`${operation} failed: ${JSON.stringify(error.body.error)}`);
      return result;
    };
  }
}
