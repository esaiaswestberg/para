import { createLogger, format, transports } from 'winston'

export default class Log {
  private static logLevel: string = Bun.env.LOG_LEVEL || 'warn'

  private static errorFileTransport = new transports.File({ filename: 'logs/error.log', level: 'error', format: format.uncolorize() })
  private static combinedFileTransport = new transports.File({ filename: 'logs/combined.log', format: format.uncolorize() })
  private static consoleTransport = new transports.Console()

  private static logger = createLogger({
    level: Log.logLevel,
    format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      format.colorize({
        colors: {
          info: 'blue',
          error: 'red',
          warn: 'yellow',
          debug: 'green',
          verbose: 'cyan'
        }
      }),
      format.simple(),
      format.printf((info) => `${new Date().toISOString()} ${info.level}: ${info.message}`)
    ),
    transports: [Log.errorFileTransport, Log.combinedFileTransport, Log.consoleTransport]
  })

  public static info(message: string): void {
    Log.logger.info(message)
  }

  public static error(message: string): void {
    Log.logger.error(message)
  }

  public static warn(message: string): void {
    Log.logger.warn(message)
  }

  public static debug(message: string): void {
    Log.logger.debug(message)
  }

  public static verbose(message: string): void {
    Log.logger.verbose(message)
  }

  public static log(message: string, level: string): void {
    Log.logger.log(level, message)
  }
}