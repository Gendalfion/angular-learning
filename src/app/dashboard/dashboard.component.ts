import {Component, OnInit} from '@angular/core';
import {CameraService} from '../services/camera.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cameraNames: string[] = [];

  constructor(private cameraService: CameraService) {
  }

  ngOnInit() {
    this.cameraService.getCameraNames()
      .then(names => this.cameraNames = names);
  }

}
