import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.scss']
})
export class PuzzleComponent implements OnInit {

  one = [
    "oneone",
    "onetwo",
    "onethree",
    "onefour"
  ]
  two = [
    "twoone",
    "twotwo",
    "twothree",
    "twofour"
  ]
  three = [
    "threeone",
    "threetwo",
    "threethree",
    "threefour"
  ]
  four = [
    "fourone",
    "fourtwo",
    "fourthree",
    "fourfour"
  ]
  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
