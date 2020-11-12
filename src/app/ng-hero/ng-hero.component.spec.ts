import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgHeroComponent } from './ng-hero.component';

describe('NgHeroComponent', () => {
  let component: NgHeroComponent;
  let fixture: ComponentFixture<NgHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
