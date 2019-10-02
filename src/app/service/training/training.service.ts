import { Injectable } from '@angular/core';
import { ExerciseModel } from 'src/app/model/exercise.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: "root"
})

export class TrainingService {
    
    selectedExercise = new Subject<ExerciseModel>();
    runningExercise: ExerciseModel;

    availableExercises: ExerciseModel[] = [
        {id: 1, name: "name 1", duration: 6, calories: 40},
        {id: 2, name: "name 2", duration: 61, calories: 140},
        {id: 3, name: "name 3", duration: 16, calories: 70},
        {id: 4, name: "name 4", duration: 23, calories: 30},
        {id: 5, name: "name 5", duration: 11, calories: 50}
    ];

    pastExercises: ExerciseModel[] = [
        {id: 1, name: "name 1", duration: 62, calories: 240, state: "completed"},
        {id: 2, name: "name 2", duration: 26, calories: 430, state: "cancelled"},
        {id: 3, name: "name 3", duration: 36, calories: 80}
    ];

    getAvailableExercises() {
        return this.availableExercises.slice();
    }

    startExercie(index: number) {
        this.runningExercise = this.availableExercises.find(
            ex => ex.id == index
        );
        this.selectedExercise.next({...this.runningExercise});
    }

    getRunningExercise() {
        return {...this.runningExercise};
    }

    completeExercise() {
        this.pastExercises.push({
            ...this.runningExercise,
            date: new Date(),
            state: "completed"
        });
        this.runningExercise = null;
        this.selectedExercise.next(null);
    }

    cancelExercise(progress: number) {
        this.pastExercises.push({
            ...this.runningExercise,
            duration: this.runningExercise.duration * (progress/100),
            calories: this.runningExercise.duration * (progress/100),
            date: new Date(),
            state: "cancelled"
        });
        this.runningExercise = null;
        this.selectedExercise.next(null);
    }

    getPastExercises() {
        return this.pastExercises.slice();
    }

}