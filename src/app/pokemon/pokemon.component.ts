import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  defaultPokemonData = {
        "id": 25,
        "name": "pikachu",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric"
                }
            }
        ],
        "sprites": {
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        },
        "species": {
            "url": "https://pokeapi.co/api/v2/pokemon-species/25/",
            "name": "pikachu"
        },
        "evolutionChain": {
            "chain": {
                "species": {
                    "url": "https://pokeapi.co/api/v2/pokemon-species/172/",
                    "name": "pichu"
                },
                "evolves_to": [
                    {
                        "species": {
                            "url": "https://pokeapi.co/api/v2/pokemon-species/25/",
                            "name": "pikachu"
                        },
                        "evolves_to": [
                            {
                                "species": {
                                    "url": "https://pokeapi.co/api/v2/pokemon-species/26/",
                                    "name": "raichu"
                                },
                                "evolves_to": []
                            }
                        ]
                    }
                ]
            }
        }
    }

  @Input()
  pokemon: Pokemon = new Pokemon(this.defaultPokemonData);

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
  searchName: string;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
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

  getPokemonByName() {
    this.pokemonService.getPokemonByName(this.searchName.toLowerCase()).subscribe(
      (pokemonData) => {
        this.pokemon = new Pokemon(pokemonData);
        console.log(pokemonData);
      }
    );
    this.searchName = null;
  }

  getNextPokemon() {
    this.searchID = this.pokemon.id + 1;
    this.getPokemonById();
  }

  getPreviousPokemon() {
    this.searchID = this.pokemon.id - 1;
    this.getPokemonById();
  }

}
