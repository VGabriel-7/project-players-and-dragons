import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _countOfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._countOfInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._countOfInstances;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }
}