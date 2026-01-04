import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private storage: Storage){
    this.init()
  }

  private _storage : Storage | null = null;

async init(){
  //if(!this._storage){
 //const storage =
  await this.storage.create();
 // this._storage = storage;
 //create local storage
  //}
}

async set(key:string, value:any){
 await this.storage.set(key, value);
 //set method for key
}

public async get(key:string){
 //await this._storage?.get(key);
  return await this.storage.get(key)
  //Get method for key
}


  /*
public async remove(key: string){
  let value= await this._storage?.remove(key);
  }

  public async clear(){
    let value= await this._storage?.clear();
  }

  public async keys(){
   let value= await this._storage?.keys();

   return value
  */

}
