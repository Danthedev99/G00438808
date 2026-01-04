import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class MyHttp {
  constructor() {}

 get(url: string): Promise<any> {
    return fetch(url).then(res => res.json());
  }

  public async getWithOptions(options: HttpOptions){
    return await CapacitorHttp.get(options);
  }
}
