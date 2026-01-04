import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonApp, IonRouterOutlet, IonContent, IonItem, IonCard, IonHeader, IonTitle, IonToolbar, IonCardTitle, IonCardHeader, IonCardContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
//import { G00438808Page } from '../g00438808/g00438808.page';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import {map } from 'rxjs';
import {MyHttp } from 'src/app/my-http';
import { MetricUsValueState } from 'src/app/metric-us-value-state';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonIcon, IonApp, IonRouterOutlet, IonCardContent, IonItem, IonCardHeader, IonCardTitle, IonContent, IonCard, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton]
})



  export class DetailsPage implements OnInit {
  loadedRecipe: any = null;

  private APIKEY= '70759a4f7911402abcc53d3c51d3b759';
  //provided API Key
  recipeID: string | null = null;


  ingredients: {name: string, amount: string, image: string, isFavourite: boolean}[] = [];
  //array required since it needs to be stored as a list of variables for use in each card
  instructions: string = '';
  imageUrl: string = '';
  //For saving it as a string so it can be accessed later to display images on ingredients
  constructor(private route: ActivatedRoute, private router: Router, private http: MyHttp,
    private metricService: MetricUsValueState) {
      //instances of route,router,http and metrivusvaluestate all needed
  this.recipeID = this.route.snapshot.paramMap.get('id');
 // keeps a list of the parameters surrounding the route related to the recipeid for navigating
  console.log('recipeID: ', this.recipeID);
  //save this recipeid as a display
}

async AddFavourite() {
    if (!this.loadedRecipe){
      console.error('Recipe not loaded yet');
      return;
    }//if a loaded recipe cannot be found display this error

     const stored = JSON.parse(localStorage.getItem('favourites') || '[]');
     //storing values for the array

    if (stored.find((r: any) => r.id ===this.loadedRecipe.id)){
      console.log('Recipe already in favourites');
        return;

        //To avoid duplicates it cycles through and checks if for each in stored recipes there is a match already
    }

  const recipeToSave = {
    id: this.loadedRecipe.id,
    title: this.loadedRecipe.title || 'untitled recipe',
    image: this.loadedRecipe.image || 'no image to display'
    //saving most of the required recipe info aspects
    };

    stored.push(recipeToSave);
    //push recipe to favourites once checked

    localStorage.setItem('favourites', JSON.stringify(stored));
    // store the favourites locally and turn them to string , which is also seen in f12>apps>local storage

    console.log('Saved to favourites:', stored);
   }


async ngOnInit() {
  //when constructor is called this begins
  if( !this.recipeID) return;
        // Convert the ingredients array to a simple string, if not return
  try {

  const recipeData =  await this.http.get(`https://api.spoonacular.com/recipes/${this.recipeID}/information?apiKey=${this.APIKEY}`
    //call recipe from recipes page and save it with its data directly in a variable , ingredients are called in a separate API call below
    );
    this.loadedRecipe = recipeData;
    console.log("Load This recipe", this.loadedRecipe);

  const ingredientsData = await this.http.get(
    `https://api.spoonacular.com/recipes/${this.recipeID}/ingredientWidget.json?apiKey=${this.APIKEY}`
  );
  this.ingredients = ingredientsData.ingredients.map((ingredient: any) => ({
  name: ingredient.name,
  amount :  this.metricService.MetricValue
    ? `${ingredient.amount.metric.value} ${ingredient.amount.metric.unit}`
    : `${ingredient.amount.us.value} ${ingredient.amount.us.unit}` ,
    //Ternary calls used here to make sure that 1) the correct metric or us is chosen and 2) the ingredient shorthand or split version is used,
    // depending on what matches the stored data for the ID of the image for that ingredient
   image : ingredient.image
    ? `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`
    : `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.name.split(' ')[0].toLowerCase()}.png`,

 isFavourite: false

  }));

  console.log(ingredientsData);

  const instructionsData = await this.http.get(`https://api.spoonacular.com/recipes/${this.recipeID}/analyzedInstructions?apiKey=${this.APIKEY}`);
    this.instructions = instructionsData[0].steps
    //start the instructions from the beginning
    .map((s: any) => `${s.number}. ${s.step}`)
    //map the the steps from the beginning and add them togtether each time and at the end join, with errors displayed if there is some recipe problem
    .join(' ');
       } catch (error) {
        console.error("Error encountered while importing data " +error);
         }
      }
    }
