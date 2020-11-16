import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.scss'],
})
export class SoundComponent implements OnInit {
  ngOnInit(): void {}

  audio = document.querySelector('audio');
  bod: string = "white";
  @HostListener('window:keydown.space') spaceEvent() {
    const aud = document.querySelector('audio');
    aud.play();
  }
  @HostListener('window:keyup.space') spaceEvent2() {
    const aud = document.querySelector('audio');
    aud.pause();
    aud.load();
  }
  @HostListener('window:keydown.R') colorR() {
    if(this.bod === "red"){
      document.body.style.backgroundColor = 'white';
      this.bod = "white";
    }else{
      document.body.style.backgroundColor = 'red';
      this.bod = "red";
    }
  }
  @HostListener('window:keydown.B') colorB() {
    if(this.bod === "blue"){
      document.body.style.backgroundColor = 'white';
      this.bod = "white";
    }else{
      document.body.style.backgroundColor = 'blue';
      this.bod = "blue";
    }
  }
  @HostListener('window:keydown.Y') colorY() {
    if(this.bod === "yellow"){
      document.body.style.backgroundColor = 'white';
      this.bod = "white";
    }else{
      document.body.style.backgroundColor = 'yellow';
      this.bod = "yellow";
    }
  }
  @HostListener('window:keydown.G') colorG() {
    if(this.bod === "red"){
      document.body.style.backgroundColor = 'orange';
      this.bod = "orange";
    }else if(this.bod === "orange"){
      document.body.style.backgroundColor = 'yellow';
      this.bod = "yellow";
    }else if(this.bod === "yellow"){
      document.body.style.backgroundColor = 'green';
      this.bod = "green";
    }else if(this.bod === "green"){
      document.body.style.backgroundColor = 'blue';
      this.bod = "blue";
    }else if(this.bod === "blue"){
      document.body.style.backgroundColor = 'violet';
      this.bod = "violet";
    }else{
      document.body.style.backgroundColor = 'red';
      this.bod = "red";
    }
  }

  bruh() {
    const aud = document.querySelector('audio');
    aud.play();
  }
}
