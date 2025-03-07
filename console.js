export class ConsoleLogger {
  constructor(options = {}) {
    this.data = options.data || {}
  }
  with(key, value) {
    this.data[key] = value
    return this
  }
  log(...msg) {
    console.log(...msg, this.data)
  }
  async flush() { }
}
