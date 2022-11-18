import { EnergyType } from '../Energy';

export default abstract class Archetypes {
  private _name: string;
  private _special: number;
  private _cost: number;
  abstract get energyType(): EnergyType;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  get name(): string { return this._name; } 
  get special(): number { return this._special; }
  get cost(): number { return this._cost; }
  
  static createdArchetypeInstances(): number {
    throw Error('Not implemented');
  }
}
