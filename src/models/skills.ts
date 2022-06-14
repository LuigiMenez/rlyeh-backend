import { Column } from "typeorm";
import { Language } from "./language";
import { TechSkills } from "./techSkills";

export class Skills {
  @Column((type) => TechSkills)
  techSkills!: TechSkills[];

  @Column((type) => Language)
  language!: Language[];

  @Column()
  softSkills!: string[];
}
