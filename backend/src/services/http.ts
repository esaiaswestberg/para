import * as trpcExpress from '@trpc/server/adapters/express'
import type { Application, NextFunction, Request, Response } from 'express'
import express from 'express'
import { appRouter } from '../router'
import Log from './log'
import { createContext } from './trpc'

export default class HttpService {
  private static app: Application

  public static initialize() {
    HttpService.app = HttpService.createApplication()
    HttpService.app.listen(3000)
  }

  private static createApplication(): Application {
    const app = express()

    app.use(HttpService.accessLoggingMiddleware)

    app.use(
      '/trpc',
      trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext
      })
    )

    return app
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
