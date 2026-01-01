import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HomeService } from '../../home/services/home-service';

@Component({
  selector: 'app-g00438808',
  templateUrl: './g00438808.page.html',
  styleUrls: ['./g00438808.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class G00438808Page implements OnInit {

  keyword: string = "";

  constructor(private HomeService: HomeService) { }


  ngOnInit() {
    this.HomeService.get('keyword');
  }

async getKeyword(){
this.keyword = await this.HomeService.get('keyword');
}

}
