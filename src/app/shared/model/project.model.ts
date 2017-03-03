/**
 * Model that represents a project
 */
export class Project {
  team: string;
  start_date: Date;
  end_date: Date;
  description: string;

  constructor(team: string, start_date: Date, end_date: Date, description: string) {
    this.team = team;
    this.start_date = start_date;
    this.end_date = end_date;
    this.description = description;
  }
}
