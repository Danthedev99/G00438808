import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCard, IonButton } from '@ionic/angular/standalone';
import { HomeService } from '../../home/services/home-service';
import { HttpOptions } from '@capacitor/core';
import { MyHttp } from 'src/app/my-http';
import{ IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-g00438808',
  templateUrl: './g00438808.page.html',
  styleUrls: ['./g00438808.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton]
})
export class G00438808Page implements OnInit {

  api_key= "70759a4f7911402abcc53d3c51d3b759";
  RecipeInfo!:any;
  keyword:string= ""
  options:HttpOptions ={
    url:'https://api.spoonacular.com/recipes/complexSearch?apiKey='+ this.api_key + "&query="
    //https://spoonacular.com/food-api/docs + https://www.postman.com/spoonacular-api/spoonacular-api/overview explain how to format search query for spoonacular
  }
  constructor(private HomeService: HomeService, private myhs: MyHttp, private router: Router) { }


  ngOnInit() {
    this.getKw();
  }

async getKw(){
this.keyword = await this.HomeService.get('kw');
this.options.url = this.options.url.concat(this.keyword);
let result = await this.myhs.getWithOptions(this.options)
this.RecipeInfo = result.data
console.log(JSON.stringify(this.RecipeInfo))
this.RecipeInfo = JSON.parse(this.RecipeInfo);
//asynchronously running the wait for the keyword so that it can be used to be added to the url
//then once done , the HTTP options are loaded and wait for a response so that once it is loaded into a result it can be
//displayed on the console and saved
}

 NavDetails(id: any){
  console.log('id: ' , id);
   this.router.navigate(['details', id]);
   //quick method to navigate from page to details with the specified id of recipe
 }

}
