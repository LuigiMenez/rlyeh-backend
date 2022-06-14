import { Column } from "typeorm";
import { TechSkills } from "./techSkills";

export class Skills {
  @Column((type) => TechSkills)
  techSkills!: TechSkills[];
}
