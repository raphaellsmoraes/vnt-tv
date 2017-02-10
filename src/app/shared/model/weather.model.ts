/**
 * Model that represents the weather
 */
export class Weather {
  private text: string;
  private date: Date;
  private day?: string;
  private high?: number;
  private low?: number;
  public temp?: number;
  public code: number;

  constructor(obj?: any) {
    this.code = obj.code;
    this.date = obj.date;
    this.day = obj.day;
    this.temp = obj.temp;
    this.high = Number(obj.high);
    this.low = Number(obj.low);
    this.text = obj.text;

    if (typeof this.temp === 'undefined') {
      this.temp = (this.high + this.low) / 2;
    }
  }
}
