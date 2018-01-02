import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input()
  pokemon: Pokemon = new Pokemon({id: "", name: "", types: [{type: {name: ""}}], sprites: {front_default: ""}});

  @Input()
  displayEvolutionChain() : string {
    let toReturn: string = "";
    toReturn += this.pokemon.evolutionChain.chain.species.name;
    if(this.pokemon.evolutionChain.chain.evolves_to.length > 0) {
      toReturn += " --> " + this.pokemon.evolutionChain.chain.evolves_to[0].species.name;

      if(this.pokemon.evolutionChain.chain.evolves_to[0].evolves_to.length > 0) {
        toReturn += " --> " + this.pokemon.evolutionChain.chain.evolves_to[0].evolves_to[0].species.name;
      }
    }
    return toReturn;
  }

  @Input()
  color = {
    "normal": "#A8A77A",
    "fire":  "#EE8130",
    "water":  "#6390F0",
    "electric":  "#F7D02C",
    "grass":  "#7AC74C",
    "ice":  "#96D9D6",
    "fighting":  "#C22E28",
    "poison":  "#A33EA1",
    "ground":  "#E2BF65",
    "flying":  "#A98FF3",
    "psychic":  "#F95587",
    "bug":  "#A6B91A",
    "rock":  "#B6A136",
    "ghost":  "#735797",
    "dragon":  "#6F35FC",
    "dark":  "#705746",
    "steel":  "#B7B7CE",
    "fairy":  "#D685AD"
  }

  searchID: number;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getRandomPokemon();
  }

  getRandomPokemon() {
    this.pokemonService.getRandomPokemon().subscribe(
      (pokemonData) => {
        this.pokemon = new Pokemon(pokemonData);
        console.log(pokemonData);
      }
    );
  }

  getPokemonById() {
    this.pokemonService.getPokemonById(this.searchID).subscribe(
      (pokemonData) => {
        this.pokemon = new Pokemon(pokemonData);
        console.log(pokemonData);
      }
    );
    this.searchID = null;
  }

}
