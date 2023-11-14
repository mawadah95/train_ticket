import { Injectable } from '@angular/core';
import { Train } from './admin/addtrain/addtrain.component';


@Injectable({
  providedIn: 'root'
})
export class TrainService {
    updateTrains(trains: Train[]) {
      throw new Error('Method not implemented.');
    }
    getTrainsObservable(): import("rxjs").Observable<Train[]> {
        throw new Error('Method not implemented.');
    }

    private trains: Train[] = [];
  
    getTrains(): Train[] {
      console.log('Getting trains:', this.trains);
      return this.trains;
    }

    addTrain(train: Train): void {
      console.log('Adding train:', train);
      this.trains.push(train);
    }

  }