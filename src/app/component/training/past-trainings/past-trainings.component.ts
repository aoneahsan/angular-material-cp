import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/service/training/training.service';
import { ExerciseModel } from 'src/app/model/exercise.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css']
})
export class PastTrainingsComponent implements OnInit {

  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  exercisesData = new MatTableDataSource<ExerciseModel>();

  constructor(private _trainingService: TrainingService) { }

  ngOnInit() {
    this.exercisesData.data = this._trainingService.getPastExercises();
  }

}
