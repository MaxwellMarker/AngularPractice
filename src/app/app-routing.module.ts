import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgHeroComponent } from './ng-hero/ng-hero.component';
import { PixelDrawComponent } from './pixel-draw/pixel-draw.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { SoundComponent } from './sound/sound.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'puzzle', component: PuzzleComponent },
  { path: 'sound', component: SoundComponent },
  { path: 'nghero', component: NgHeroComponent },
  { path: 'pixels', component: PixelDrawComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
