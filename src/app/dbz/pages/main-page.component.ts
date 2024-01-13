import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interfac';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  constructor( public dbzService: DbzService ) {

  } // Injecting the service here is not necessary

}
