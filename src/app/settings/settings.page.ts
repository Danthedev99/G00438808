import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRadio, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonList } from '@ionic/angular/standalone';
import { MetricUsValueState } from '../metric-us-value-state';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonLabel, IonListHeader, IonRadioGroup, IonRadio, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})


export class SettingsPage implements OnInit {
MetricValue: boolean = true;

  constructor(private MetricOrUs: MetricUsValueState) {}

  MetricValueTrue(){
    this.MetricOrUs.MetricValue = true;
  }

    MetricValueFalse(){
    this.MetricOrUs.MetricValue = false;
  }

// boolean settings using the service also in order to be able to actively change from US to metric by switching actively from one to the other
// and using the service in order to be able to move back and forth between US and Metric

  ngOnInit() {
  }

}
