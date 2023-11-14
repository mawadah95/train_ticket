import { Component, OnInit } from '@angular/core';
import { TrainService } from 'src/app/train.service';
import { Train } from '../addtrain/addtrain.component';


@Component({
  selector: 'app-viewtrain',
  templateUrl: './viewtrain.component.html',
  styleUrls: ['./viewtrain.component.css']
})
export class ViewtrainComponent implements OnInit {
  trains: Train[] = [];

  constructor(private trainService: TrainService) {}

  ngOnInit(): void {
    console.log('ViewtrainComponent initialized');
    this.trains = this.trainService.getTrains();


     this.trains = [

    { name: ' Train 1', destination: 'Muscatto to Nizwa', departureTime: '09:00 AM', price: 30.00 },
      { name: ' Train 2', destination: 'Muscat to Salalah', departureTime: '10:30 AM', price: 70.00 },
      { name: ' Train 3', destination: 'Nizwa to  Muscat', departureTime: '12:15 PM', price: 30.00 },
  ];
  }

  deleteTrain(train: Train): void {
  
    this.trains = this.trains.filter(t => t !== train);
    this.trainService.updateTrains(this.trains);
  }
}
