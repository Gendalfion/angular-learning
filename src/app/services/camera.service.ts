export abstract class CameraService {
  abstract getCameraNames(): Promise<string[]>;
}
