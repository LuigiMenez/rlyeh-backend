import { Column } from "typeorm";

export class Language {
  @Column()
  nameLanguage!: string;

  @Column()
  level!: string;

  constructor(nameLanguage: any, level: any) {
    this.nameLanguage = nameLanguage;
    this.level = level;
  }
}
