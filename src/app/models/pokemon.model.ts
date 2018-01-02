import { Types } from './types.model';
import { Sprites } from './sprites.model';
import { EvolutionChain } from './evolution-chain.model';

export class Pokemon {

  id: number;
  name: string;
  types: Types[];
  sprites: Sprites;
  evolutionChain: EvolutionChain;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  toString(): string {
    return this.name + " " + this.id;
  }
}
