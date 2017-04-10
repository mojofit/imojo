import {Injectable} from "@angular/core";
import {Sql} from "./sql";

@Injectable()
export class DatabaseService {

  constructor(public _db: Sql) {
  }

  //
  // Shared getter setter
  //
  set(key: string, value: string): Promise<boolean> {
    return this._db.set(key, value)
      .then(() => true)
      .catch(err => {
        console.error('[Error] Saving ' + key + ' - ' + JSON.stringify(err));
        return false;
      });
  }

  get(key: string): Promise<string> {
    return this._db.get(key)
      .then(value => {
        if (value) {
          return value;
        } else {
          throw new Error('Undefined value');
        }
      })
      .catch(err => {
        console.error('[Error] Getting ' + key + ' - ' + JSON.stringify(err));
        return null;
      });
  }

  remove(key: string): Promise<boolean> {
    return this._db.remove(key)
      .then(() => true)
      .catch(err => {
        console.error('[Error] Removing ' + key + ' - ' + JSON.stringify(err));
        return false;
      });
  }

  getJson(key: string): Promise<any> {
    return this.get(key).then(value => {
      try {
        return JSON.parse(value);
      } catch (err) {
        console.error('Storage getJson(): unable to parse value for key', key, ' as JSON');
        return null;
      }
    });
  }

  setJson(key: string, value: any): Promise<boolean> {
    try {
      return this.set(key, JSON.stringify(value));
    } catch (err) {
      return Promise.resolve(false);
    }
  }
}
