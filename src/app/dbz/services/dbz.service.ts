import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interfac';

console.log(uuid()); // ⇨ '886313e1-3b8a-5372-8c8d-0a9ebce3b3fd'

@Injectable({providedIn: 'root'})
export class DbzService {

  // constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];



  onNewCharacter(character: Character): void {
    // console.log('Main Page Component')
    // console.log(character);

    const newCharacter : Character = {

      id: uuid(),
      ...character
    };
    this.characters.push(newCharacter);

  }


  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);  }

}
