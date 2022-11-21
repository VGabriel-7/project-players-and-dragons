import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player: Fighter;
  private _player2: Fighter;

  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this._player = player;
    this._player2 = player2;
  }

  private static pvp(p1: Fighter, p2: Fighter): number {
    let winner = 0;
    while (winner === 0) {
      p1.attack(p2);
      if (p2.lifePoints <= 0) { winner = 1; }
      p2.attack(p1);
      if (p1.lifePoints <= 0) { winner = -1; }
    }

    return winner;
  } 

  fight(): number {
    const p1 = this._player;
    const p2 = this._player2;
    
    const winner = PVP.pvp(p1, p2);

    return winner;
  }
}