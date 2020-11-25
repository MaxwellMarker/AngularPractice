import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelDrawComponent } from './pixel-draw.component';

describe('PixelDrawComponent', () => {
  let component: PixelDrawComponent;
  let fixture: ComponentFixture<PixelDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixelDrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PixelDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
