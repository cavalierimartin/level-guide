import { Skill } from './skill';

export interface Level {
  id: number;
  name: string;
  position: number;
  description: string;
  skills: Skill[];
}