export class NationalityModel {
  id: number;
  Amharic: string;
  English: string;
  description: string;
  descriptionEnglish: string;

  constructor(id: number, amharic: string, english: string, description: string, descriptionEnglish: string) {
    this.id = id;
    this.Amharic = amharic;
    this.English = english;
    this.description = description;
    this.descriptionEnglish = descriptionEnglish;
  }
}
