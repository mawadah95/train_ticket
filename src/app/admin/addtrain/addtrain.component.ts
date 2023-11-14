import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrainService } from 'src/app/train.service';


export interface Train {
  name: string;
  destination: string;
  departureTime: string;
  price: number;
}


@Component({
  selector: 'app-addtrain',
  templateUrl: './addtrain.component.html',
  styleUrls: ['./addtrain.component.css']
})
export class AddtrainComponent {

  trainForm: FormGroup;
  

  constructor(private trainService: TrainService, private fb: FormBuilder, private router: Router ) {
    this.trainForm = this.fb.group({
      name: ['', Validators.required],
      destination: ['', Validators.required],
      departureTime: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]], // Validates that the price is a positive number with up to two decimal places
    });
  }

  onSubmit(): void {
    const newTrain: Train = this.trainForm.value;
    this.trainService.addTrain(newTrain);
    this.trainForm.reset();
    this.router.navigate(['/admin/viewtrain']);

    
  }
}

// export { Train };
