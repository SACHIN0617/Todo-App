import { readFileSync } from 'fs';
import { parse } from 'dotenv';

export class ConfigService {
  private readonly config: { [key: string]: any };

  constructor(path: string) {
    this.config = parse(readFileSync(path));
  }

  public get(key: string): string {
    return this.config[key];
  }
}
