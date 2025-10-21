/**
* Let's you easily log to multiple loggers at the same time. 
*/
export class DualLogger {
  constructor(loggers) {
    this.loggers = loggers
  }

  log(...params) {
    for (let l of this.loggers) {
      l.log(...params)
    }
  }

  async flush() {
    for (let l of this.loggers) {
      await l.flush()
    }
  }

}
