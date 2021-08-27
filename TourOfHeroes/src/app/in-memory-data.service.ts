import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Capitão América' },
      { id: 12, name: 'Viúva Negra' },
      { id: 13, name: 'Luke Cage' },
      { id: 14, name: 'Homem-Aranha' },
      { id: 15, name: 'Wanda Maximoff' },
      { id: 16, name: 'Demolidor' },
      { id: 17, name: 'Gavião Arqueiro' },
      { id: 18, name: 'Hulk' },
      { id: 19, name: 'Visão' },
      { id: 20, name: 'Valquíria' }
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}