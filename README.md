# logger
Tiny wrapper around console.log to match my other loggers like Google Cloud, Baselime and Better stack loggers. 

## Usage

```sh
npm install treeder/console-logger
```

```js
import {ConsoleLogger} from "console-logger"

let logger = new ConsoleLogger()
if (c.env.BETTERSTACK) {
  logger = new BetterstackLogger({ ...JSON.parse(c.env.BETTERSTACK), data: { requestId: nanoid(), path: url.pathname } })
}

logger.log("hello world!")
logger.log({message: "hello!"})
logger.log(err)
logger.log("uh oh", err)
logger.log("This is some data:", {name: "John Wick"})
await logger.flush() // flush all messages in one batch
```
