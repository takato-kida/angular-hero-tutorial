import { Component } from '@angular/core'
import { Hero } from '../model/hero';
import { UpperCasePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../data/mock-heroes';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes: Hero[] = HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero):void{
    this.selectedHero = hero;
  }
}