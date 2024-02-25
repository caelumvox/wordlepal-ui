import { Injectable } from '@angular/core';

const SESSION_KEY = 'wordlepal-session';
const DEVICE_KEY = 'wordlepal-device';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  generateDeviceUuid(): string {
    return crypto.randomUUID();
  }

   /*
   * If the deviceUuid is not found in local storage, generate a new one and store it.
   */
   getDeviceUuid(): string {
    let deviceUuid = localStorage.getItem(DEVICE_KEY);
    if (deviceUuid === null) {
      deviceUuid = this.generateDeviceUuid();
      localStorage.setItem(DEVICE_KEY, deviceUuid);
    }
    return deviceUuid;
  }

  getSession(): any {
    let sessionJson = localStorage.getItem(SESSION_KEY);
    if (sessionJson === null) {
      console.log('Session was not established');
      return null;
    }
    return JSON.parse(sessionJson);
  }

  setSession(token: string): void {
    const payloadB64Json = token.split('.')[1];
    const payloadJson = atob(payloadB64Json);
    const payload = JSON.parse(payloadJson);
    const sessionData = {
      "token": token,
      "exp": payload.exp,
      "iat": payload.iat,
      "sub": payload.sub
    };
    const sessionJson = JSON.stringify(sessionData);
    localStorage.setItem(SESSION_KEY, sessionJson);
  }

  deleteSession() {
    localStorage.removeItem(SESSION_KEY);
  }
}
