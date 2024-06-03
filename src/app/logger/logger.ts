export type LogFunction = {
  (message?: any, ...optionalParams: any[]): void;
};

export type Logger = {
  log: LogFunction;
  warn: LogFunction;
  error: LogFunction;
};

export class ConsoleLogger implements Logger {
  log(message?: any, ...optionalParams: any[]): void {
    console.log(message, ...optionalParams);
  }

  warn(message?: any, ...optionalParams: any[]): void {
    console.warn(message, ...optionalParams);
  }

  error(message?: any, ...optionalParams: any[]): void {
    console.error(message, ...optionalParams);
  }
}
