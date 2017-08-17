import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allTasks">All Tasks</option>
    <option value="completedTasks">Completed Tasks</option>
    <option value="incompleteTasks" selected="selected">Incomplete Tasks</option>
  </select>

  <ul>
    <li *ngFor="let currentTask of childTaskList | completeness"> <span (click)="toggleDone(currentTask)" [ngStyle]="setStyle(currentTask)">{{currentTask.description}}  </span><button (click)="editButtonHasBeenClicked(currentTask)">Edit!</button>
    </li>
  </ul>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();

  filterByCompleteness: string = "incompleteTasks";

  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }

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
}
