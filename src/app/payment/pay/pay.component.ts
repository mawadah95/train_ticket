import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent  implements OnInit {
  selectedTrainName: string = '';
  totalAmount: number = 55.00; // Sample total amount

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Fetch the selected train name from the URL parameters
    this.route.paramMap.subscribe(params => {
      this.selectedTrainName = params.get('trainName') || '';
    });
  }

  makePayment(): void {
    // Add your payment processing logic here
    // For demonstration purposes, you can show a success message
    alert('Payment Successful!');
  }
}
