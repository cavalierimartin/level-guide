import { Area } from './area';
import { Level } from './level';

export interface Universe {
  id: number,
  name: string,
  areas: Area[],
  levels: Level[],
}
