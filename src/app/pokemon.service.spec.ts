import { TestBed, inject } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PokemonService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [PokemonService]
    });

  });

  it('should be created', inject([PokemonService], (service: PokemonService) => {
    expect(service).toBeTruthy();
  }));

  it('should return a random pokemon when calling getRandomPokemon()', () => {
    const pokemonService = TestBed.get(PokemonService);
    const http = TestBed.get(HttpTestingController);
    const expected = { name: 'Test' };

    let actual = null;
    pokemonService.getRandomPokemon().subscribe(
      (fakeData) => {
        actual = fakeData;
      }
    );

    http.expectOne('/random').flush(expected);

    // expect(actual).toEqual(expected);
    http.verify();
  });

});
