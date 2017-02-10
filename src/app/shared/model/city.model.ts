  /**
   * Model that represents a city
   * @param name name of the City
   * @param state state where the city belongs
   * @param active? is the city being displayed
   */
export class City {
  private name: string;
  private state: string;
  private active: boolean = false;

  constructor(name: string, state: string, active?: boolean) {
    this.name = name;
    this.state = state;
    this.active = active;
  }
}
