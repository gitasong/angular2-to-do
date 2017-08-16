import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>

    <task-list [childTaskList]="masterTaskList" (clickSender)="editTask($event)"></task-list>

    <hr>
        <div *ngIf="selectedTask">
          <h3>{{selectedTask.description}}</h3>
          <p>Task Complete? {{selectedTask.done}}</p>
          <h3>Edit Task</h3>
          <label>Enter Task Description:</label>
          <input [(ngModel)]="selectedTask.description">
          <br>
          <form id="edit">
            <label>Enter Task Priority (1-3):</label>
            <br>
            <input type="radio" name="priority" [(ngModel)]="selectedTask.priority" [value]="1">1 (Low Priority)<br>
            <input type="radio" name="priority" [(ngModel)]="selectedTask.priority" [value]="2">2 (Medium Priority)<br>
            <input type="radio" name="priority" [(ngModel)]="selectedTask.priority" [value]="3">3 (High Priority)
            <button (click)="finishedEditing()">Done</button>
          </form>
       </div>
  </div>
  `
})

export class AppComponent {
  isClassVisible: false;
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  selectedTask: null;

  masterTaskList: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ];


  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  finishedEditing() {
    this.selectedTask = null;
  }
}
