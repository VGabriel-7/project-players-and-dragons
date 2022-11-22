import Archetypes, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetypes;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;
  private _random: number;

  constructor(name:string) {
    this._random = getRandomInt(1, 10);
    this._name = name;
    this._dexterity = this._random;
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = this._random;
    this._defense = this._random;
    this._energy = { type_: 'mana', amount: this._random };
  }

  get race(): Race { return this._race; }
  get archetype(): Archetypes { return this._archetype; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): Energy { return { ...this._energy }; }
  get name(): string { return this._name; }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else { this._lifePoints -= 1; }

    if (this._lifePoints <= 0) { this._lifePoints = -1; }

    return this._lifePoints;
  }
  
  levelUp(): void {
    const increment = this._random;
    this._strength += increment;
    this._dexterity += increment;
    this._defense += increment;
    this._energy.amount = 10;
    this._maxLifePoints += increment;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  special?(enemy: Fighter): void {
    const specialAttack = this._strength ** 2;
    enemy.receiveDamage(specialAttack);
  }
}