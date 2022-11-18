import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Necromancer extends Archetypes {
  private _energyType: EnergyType;
  private static _countOfInstances = 0;

  constructor(name:string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._countOfInstances += 1;
  }

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number { return this._countOfInstances; }
}