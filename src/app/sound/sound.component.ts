import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.scss']
})
export class SoundComponent implements OnInit {
  ngOnInit(): void{}

  audio = document.querySelector('audio')

  @HostListener('window:keydown.space') spaceEvent() {
    const aud = document.querySelector('audio');
    aud.play()
  }
  @HostListener('window:keyup.space') spaceEvent2() {
    const aud = document.querySelector('audio');
    aud.pause()
    aud.load()
  }

  bruh(){
    const aud = document.querySelector('audio');
    aud.play()
  }
  
}
