import { Column } from "typeorm";

export class TechSkills {
  @Column()
  nameLanguage!: any;

  @Column()
  level!: any;

  constructor(nameLanguage: any, level: any) {
    this.nameLanguage = nameLanguage;
    this.level = level;
  }
}
