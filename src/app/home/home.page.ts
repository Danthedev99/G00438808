import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput } from '@ionic/angular/standalone';
import { HomeService } from './services/home-service';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpOptions } from '@capacitor/core';
import {Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonicStorageModule, IonContent, RouterLink, IonInput, FormsModule],
})
export class HomePage {
  returnedData: any;
  keyword: string = "";

  constructor(private Router: Router, private HomeService: HomeService) {}



async Search(){
console.log("Keyword saved:", this.keyword);
  await this.HomeService.set("keyword", this.keyword);
   this.Router.navigate(['/Recipes']);
 }

}
