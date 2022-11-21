import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter{
  defense: number;
  energy?: Energy;
  name?: string;
  special?(enemy: Fighter): void
  levelUp(): void
}