import Archetypes, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetypes;
  private _maxLigePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name:string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLigePoints = this._dexterity / 2;
    this._lifePoints = this._dexterity;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: 'mana', amount: getRandomInt(1, 10) };
  }

  get race(): Race { return this._race; }
  get archetype(): Archetypes { return this._archetype; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): Energy { return { ...this._energy }; }
  get name(): string { return this._name; }

  levelUp(): void {
    const increment = getRandomInt(1, 10);
    this._maxLigePoints += increment;
    if (this._maxLigePoints > this._race.maxLifePoints) {
      this._maxLigePoints = this._race.maxLifePoints;
    }
    this._strength += increment;
    this._dexterity += increment;
    this._defense += increment;
    this._energy.amount = 10;
    this._lifePoints = this._maxLigePoints;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else { this._lifePoints -= 1; }

    if (this._lifePoints <= 0) { this._lifePoints = -1; }

    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  special?(enemy: Fighter): void {
    const specialAttack = this._strength ** 2;
    enemy.receiveDamage(specialAttack);
  }
}