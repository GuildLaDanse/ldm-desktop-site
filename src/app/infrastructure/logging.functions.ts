import {Injectable} from '@angular/core';

import {environment} from '../../environments/environment';

/*
  https://medium.com/ngconf/consistent-console-logs-in-angular-37c8ab6b9b1d
 */

/**
 * Class of static methods to allow for consistent console logging.
 */
@Injectable({
  providedIn: 'root'
})
export class LoggingFunctions {

  /**
   * Logs a consistent debug message format to the console.
   *
   * @param module name of module from where logging is done
   * @param method name of method from where logging is done
   * @param [message] Optional message to log. Accepts objects too. Avoid circular json object references!
   * @param [devOnly] Only logs in development if true.
   */
  public static debug(module: string, method: string, message?: any, devOnly?: boolean) {
    // tslint:disable-next-line
    console.debug(this.getMessage(module, method, message, devOnly));
  }

  /**
   * Logs a consistent info message format to the console.
   *
   * @param module name of module from where logging is done
   * @param method name of method from where logging is done
   * @param [message] Optional message to log. Accepts objects too. Avoid circular json object references!
   * @param [devOnly] Only logs in development if true.
   */
  public static info(module: string, method: string, message?: any, devOnly?: boolean) {
    // tslint:disable-next-line
    console.info(this.getMessage(module, method, message, devOnly));
  }

  /**
   * Logs a consistent warning message format to the console.
   *
   * @param module name of module from where logging is done
   * @param method name of method from where logging is done
   * @param [message] Optional message to log. Accepts objects too. Avoid circular json object references!
   * @param [devOnly] Only logs in development if true.
   */
  public static warn(module: string, method: string, message?: any, devOnly?: boolean) {
    console.warn(this.getMessage(module, method, message, devOnly));
  }

  /**
   * Logs a consistent error message format to the console.
   *
   * @param module name of module from where logging is done
   * @param method name of method from where logging is done
   * @param [message] Optional message to log. Accepts objects too. Avoid circular json object references!
   * @param [devOnly] Only logs in development if true.
   */
  public static error(module: string, method: string, message?: any, devOnly?: boolean) {
    console.error(this.getMessage(module, method, message, devOnly));
  }

  /**
   * Logs a consistent log message format to the console in development only.
   *
   * @param module name of module from where logging is done
   * @param method name of method from where logging is done
   * @param [message] Optional message to log. Accepts objects too. Avoid circular json object references!
   */
  public static devOnly(module: string, method: string, message?: any) {
    if (!environment.production) {
      // tslint:disable-next-line
      console.log(this.getMessage(module, method, message));
    }
  }

  /**
   * Logs a consistent warning message to the console in development only.
   *
   * @param module name of module from where logging is done
   * @param method name of method from where logging is done
   * @param [message] Optional message to log. Accepts objects too. Avoid circular json object references!
   */
  public static techDebt(module: string, method: string, message?: any) {
    if (!environment.production) {
      // tslint:disable-next-line
      console.warn(`TECHDEBT: ${this.getMessage(module, method, message, false)}`);
    }
  }

  private static getMessage(module: string, method: string, message?: any, devOnly?: boolean) {
    const type = typeof message;
    if ((devOnly && environment.production) || type === 'undefined' || (type === 'string' && message.length === 0)) {
      return `${module}.${method}`;
    } else if (type === 'string' || type === 'number') {
      return `${module}.${method} - ${message}`;
    } else {
      return `${module}.${method} - ${JSON.stringify(message)}`;
    }
  }
}
