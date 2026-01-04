import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton]
})
export class FavouritesPage implements OnInit {

    Favourites: {name: string, amount: string, image: string}[] = [];

  constructor(private router: Router ) {


   }
 ionViewWillEnter() {
    const stored = JSON.parse(localStorage.getItem('favourites') || '[]');
    this.Favourites = stored;
    console.log('Favourites loaded:', this.Favourites);
  }//load favourites from storage when page opens

 NavDetails(id: any){
  console.log('id: ' , id);
   this.router.navigate(['details', id]);
   //quick method to navigate from page to details with the specified id of recipe
 }

  ngOnInit() {

}
}
