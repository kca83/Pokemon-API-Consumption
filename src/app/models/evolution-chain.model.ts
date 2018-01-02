export class EvolutionChain {

  chain: Chain;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Chain {

  species: Species;
  evolves_to: EvolvesTo[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Species {

  name: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class EvolvesTo {

  species: Species;
  evolves_to: EvolvesTo[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
