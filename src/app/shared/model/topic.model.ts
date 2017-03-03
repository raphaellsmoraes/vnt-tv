/**
 * Model that represents a list
 */
export class Topic {
  name: string;
  notice: string;

  constructor(name: string, notice: string) {
    this.name = name;
    this.notice = notice;
  }
}
