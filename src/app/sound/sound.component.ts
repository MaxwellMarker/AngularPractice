import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.scss']
})
export class SoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bruh(){
    const aud = document.querySelector('audio');
    aud.play()
  }
}
