import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _countOfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._countOfInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._countOfInstances;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }
}