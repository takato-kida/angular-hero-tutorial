import { Component, } from '@angular/core';
import { Hero } from '../model/hero';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { HeroService } from '../service/hero.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) {}
  hero: Hero | undefined;

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));  
    this.heroService.getHeroes().subscribe(heroes => {
      this.hero = heroes.find(hero => hero.id === id);
    });
  }
}
