import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDesciption(): string {
    return `${this.name } - ${this.age}`;
  }

  public changeName(): void {
    this.name = 'Spiderman';
  }

  public changeAge(): void {
    this.age = 25;
  }

  public resetForm(): void {
    this.name = 'ironman';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // } );
  }

  public changeHero(): void {
    //TODO: Change hero
    throw new Error('Not implemented yet');
  }

}
