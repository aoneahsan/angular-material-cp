import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-training/stop-training.component';
import { TrainingService } from 'src/app/service/training/training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  progress: number = 0;
  timer;

  constructor(private dialog: MatDialog, private _trainingService: TrainingService) { }

  ngOnInit() {
    this.startTraining();
  }

  startTraining() {
    const step = this._trainingService.getRunningExercise().duration/100 * 1000;
    this.timer = setInterval(
      () => {
        if (this.progress >= 100) {
          clearInterval(this.timer);
          this._trainingService.completeExercise();
        } else {
          this.progress = this.progress + 5;
        }
      },
      step
    );
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this._trainingService.cancelExercise(this.progress);
        } else {
          this.startTraining();
        }
      }
    )
  }

}
