/**
 * Model that represents a city
 * @param name name of the City
 * @param state state where the city belongs
 * @param active? is the city being displayed
 */
export class City {
  public name: string;
  public state: string;
  public filename: string;
  public timezone: number;
  public alias: string;

  constructor(name: string, state: string, filename: string, timezone: number, alias: string) {
    this.name = name;
    this.state = state;
    this.filename = this.setFilename(filename);
    this.timezone = timezone;
    this.alias = alias;
  }

  private setFilename(name: string) {
    return 'background_weather-' + name + '.jpg';
  }
}
