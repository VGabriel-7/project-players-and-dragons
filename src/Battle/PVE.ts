import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

type PorE = Fighter | SimpleFighter;

export default class PVE extends Battle {
  private _player: Fighter;
  private _arrMonster: PorE[];

  constructor(player: Fighter, arrMonster: PorE[]) {
    super(player);
    this._player = player;
    this._arrMonster = arrMonster;
  }

  private static pvp(p1: Fighter, arrMonster: PorE[]): number {
    let winner = 0;
    arrMonster.forEach((monster) => {
      while (winner === 0) {
        p1.attack(monster);
        if (monster.lifePoints <= 0) { winner = 1; }
        monster.attack(p1);
        if (p1.lifePoints <= 0) { winner = -1; }
      }
    });

    return winner;
  } 

  fight(): number {
    const p1 = this._player;
    const arrMonster = this._arrMonster;
    
    const winner = PVE.pvp(p1, arrMonster);

    return winner;
  }
}