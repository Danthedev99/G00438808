import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { HomeService } from './services/home-service';
import { IonicStorageModule } from '@ionic/storage-angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonicStorageModule, IonContent],
})
export class HomePage {
  value: any="";
  constructor(private homeService: HomeService) {}

  async setValue(){
  await this.homeService.set('name', 'Dan');
  }


 async getValue(){
  await this.homeService.get('name');
  }

  async removeValue(){
    await this.homeService.remove('name');

  }

  async clearStorage(){
    await this.homeService.clear();

  }
}
