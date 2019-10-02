import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TrainingService } from 'src/app/service/training/training.service';
import { ExerciseModel } from 'src/app/model/exercise.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css']
})
export class PastTrainingsComponent implements OnInit, AfterViewInit {

  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  exercisesData = new MatTableDataSource<ExerciseModel>();

  @ViewChild(MatSort, {static: false}) sort: MatSort;

  itemsPerPage = 1;
  itemsPerPageOptions = ['5', '10', '15', '20'];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private _trainingService: TrainingService) { }

  ngOnInit() {
    this.exercisesData.data = this._trainingService.getPastExercises();
  }

  ngAfterViewInit() {
    this.exercisesData.sort = this.sort;
    this.exercisesData.paginator = this.paginator;
  }

  doFilter(filterText: string) {
    this.exercisesData.filter = filterText.trim().toLowerCase();
  }

}
