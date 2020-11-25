import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pixel-draw',
  templateUrl: './pixel-draw.component.html',
  styleUrls: ['./pixel-draw.component.scss']
})
export class PixelDrawComponent implements OnInit {

  @Input() color: string
  
  ngOnInit(): void {
  }

}
