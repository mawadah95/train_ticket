import { Component, OnInit } from '@angular/core';
import { Train } from 'src/app/admin/addtrain/addtrain.component';
import { TrainService } from 'src/app/train.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {
  trains: Train[] = [];
  selectedTrain: Train | null = null;

  constructor(private trainService: TrainService , private router: Router) {}



  ngOnInit(): void {
   
    this.trains = [
      { name: ' Train 1', destination: 'Muscatto to Nizwa', departureTime: '09:00 AM', price: 30.00 },
      { name: ' Train 2', destination: 'Muscat to Salalah', departureTime: '10:30 AM', price: 70.00 },
      { name: ' Train 3', destination: 'Nizwa to  Muscat', departureTime: '12:15 PM', price: 30.00 },
     
    ];
  }



  selectTrain(train: Train): void {
  
    this.selectedTrain = train;
  }

  
  goToPayment(): void {
    // Redirect to the payment page
    if (this.selectedTrain) {
      this.router.navigate(['/payment/bill', this.selectedTrain.name]);
    }
  }
}
