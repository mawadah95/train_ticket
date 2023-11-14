import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit{
  selectedTrainName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Fetch the selected train name from the URL parameters
    this.route.paramMap.subscribe(params => {
      this.selectedTrainName = params.get('trainName') || '';
    });
  }
}
