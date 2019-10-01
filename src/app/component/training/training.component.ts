import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/service/training/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  trainingStart: boolean = false;
  
  constructor(private _trainingService: TrainingService) { }

  ngOnInit() {
    this._trainingService.selectedExercise.subscribe(
      exercise => {
        if (exercise) {
          this.trainingStart = true;
        } else {
          this.trainingStart = false;
        }
      }
    )
  }

}
