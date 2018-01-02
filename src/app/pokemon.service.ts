import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Pokemon } from './models/pokemon.model';
import { Observable } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) { }

  getRandomPokemon() : Observable<Pokemon> {
    return this.http.get<Pokemon>("/random");
  }

  getPokemonById(id: number) : Observable<Pokemon> {
    return this.http.get<Pokemon>("/pokemon/" + id);
  }

}
