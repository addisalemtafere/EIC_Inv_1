export class CountryModel {
  public Amharic: string;
  public English: string;
  public Id: number;

  constructor(Amharic?: string, English?: string,Id?: number) {
    this.Id = Id;
    this.Amharic = Amharic;
    this.English = English;
  }
}
