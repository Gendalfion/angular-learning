import {Injectable} from '@angular/core';
import {MessagesService} from './messages.service';
import {CameraService} from './camera.service';
import {HttpClient} from '@angular/common/http';
import {Camera} from '../classes/Camera';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CameraHttpService extends CameraService {

  constructor(
    private http: HttpClient,
    private messagesService: MessagesService
  ) {
    super();
  }

  getCameraNames(): Promise<string[]> {
    return this.http.get<Camera[]>('api/cameras')
      .pipe(tap(() => this.messagesService.add('CameraHttpService: fetched cameras')))
      .toPromise()
      .then(cameras => cameras.map(camera => camera.name))
      .catch(this.messagesService.handleError('getCameraNames', []));
  }
}
