import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe({

})


export class CompletenessPipe implements PipeTransform {


  transform(input: Task[], args) {
    var output: Task[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].done === false) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
