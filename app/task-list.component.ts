import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
  <ul>
    <li (click)="toggleDone(currentTask)" [ngStyle]="setStyle(currentTask)" [class]="priorityColor(currentTask)" *ngFor="let currentTask of tasks">{{currentTask.description}}  <button (click)="editTask(currentTask)">Edit!</button>
    </li>
  </ul>
  `
})

export class TaskListComponent {
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ];

  toggleDone(currentTask) {
    console.log('toggle');
    // currentTask.done = !currentTask.done;
    if (currentTask.done === false) {
      currentTask.done = true;
    } else {
      currentTask.done = false;
    }
  }

  setStyle(currentTask) {
    // let style;
    // if (currentTask.done) {
    //   console.log('true');
    //   style = {
    //     'text-decoration': 'line-through'
    //   }
    // } else {
    //   console.log('false');
    //   style = {
    //     'text-decoration': 'none'
    //   }
    // }
    let style = {
      'text-decoration': currentTask.done ? 'line-through': 'none'
    };
    return style;
  }

  // isDone(clickedTask: Task) {
  //   if(clickedTask.done === true) {
  //     alert("This task is done!");
  //   } else {
  //     alert("This task is not done. Better get to work!");
  //   }
  // }

  priorityColor(currentTask){
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
