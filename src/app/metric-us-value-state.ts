import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root',
})

export class MetricUsValueState {
  MetricValue: boolean = true;


getMetricValue(): boolean{
  return this.MetricValue;
}



}
