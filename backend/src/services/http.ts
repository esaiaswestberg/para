import type { Application, NextFunction, Request, Response } from 'express'
import express from 'express'
import Log from './log'

export default class HttpService {
  private static app: Application

  public static initialize() {
    HttpService.app = HttpService.createApplication()
    HttpService.app.listen(3000)
  }

  private static createApplication(): Application {
    const app = express()

    HttpService.addMiddleware(app)
    HttpService.addRoutes(app)

    return app
  }

  private static addMiddleware(app: Application) {
    app.set('view engine', 'ejs')

    app.use(express.urlencoded())
    app.use(HttpService.accessLoggingMiddleware)
  }

  private static addRoutes(app: Application) {
    app.use((_, res) => res.status(404).send('404 Not Found'))
  }

  private static accessLoggingMiddleware(req: Request, res: Response, next: NextFunction) {
    const {
      ip,
      method,
      originalUrl,
      headers: { 'user-agent': userAgent }
    } = req

    Log.access(`${ip} [${new Date().toISOString()}] "${method} ${originalUrl}" "${userAgent}"`)

    next()
  }
}
