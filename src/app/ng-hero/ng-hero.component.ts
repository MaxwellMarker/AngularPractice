import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-hero',
  templateUrl: './ng-hero.component.html',
  styleUrls: ['./ng-hero.component.scss']
})
export class NgHeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  yellowNote() {
    const note = document.getElementById("yellowNote");
    note.style.width = "10px";
    note.style.height = "10px";
    note.style.backgroundSize = "20px 20px";
    note.style.bottom = "350px";
  }
}
