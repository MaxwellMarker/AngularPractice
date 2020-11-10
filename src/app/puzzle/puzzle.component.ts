import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.scss'],
})
export class PuzzleComponent implements OnInit {
  one = ['three', 'two', 'one', 'four'];
  two = ['four', 'two', 'five', 'three'];
  three = ['four', 'three', 'six', 'five'];
  four = ['five', 'seven', 'six', 'four'];
  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      setTimeout(() => {
        transferArrayItem(
          event.container.data,
          event.previousContainer.data,
          event.currentIndex + 1,
          event.previousIndex,
        );
      }, 100);
    }
  }
}
