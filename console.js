export class ConsoleLogger {
  constructor(options = {}) {
    this.data = options.data || {}
  }
  with(key, value) {
    this.data[key] = value
    return this
  }
  log(...msg) {
    let data = { ...this.data }
    for (let m of msg) {
      if (m instanceof Error) {
        data.stack = m.stack
      }
    }
    for (let key in data) {
      if (data[key] instanceof Error) {
        data[key] = {
          message: data[key].message,
          stack: data[key].stack,
          ...data[key]
        }
      }
    }
    console.log(...msg, data)
  }
  async flush() { }
}
