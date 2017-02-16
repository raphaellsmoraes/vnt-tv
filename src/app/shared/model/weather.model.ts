/**
 * Model that represents the weather
 */
export class Weather {
  private text: string;
  public date: Date;
  private day?: string;
  private high?: number;
  private low?: number;
  public temp?: number;
  public code: number;
  public size: string;
  public main: boolean;

  constructor(obj?: any) {
    this.code = obj.code;
    this.date = obj.date;
    this.day = obj.day;
    this.temp = obj.temp;
    this.high = Number(obj.high);
    this.low = Number(obj.low);
    this.text = obj.text;
    this.size = obj.size;
    this.main = obj.main;

    if (typeof this.temp === 'undefined') {
      this.temp = Math.floor((this.high + this.low) / 2);
    }
  }
}
