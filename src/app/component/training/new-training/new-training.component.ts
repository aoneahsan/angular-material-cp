import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/service/training/training.service';
import { ExerciseModel } from 'src/app/model/exercise.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  exercises: ExerciseModel[];

  constructor(private _trainingService: TrainingService) { }

  ngOnInit() {
    this.exercises = this._trainingService.getAvailableExercises();
  }

  onTrainingStart(form: NgForm) {
    this._trainingService.startExercie(form.value.selectedExercise);
  }

}
