import Log from '../services/log'
import type HttpStatus from './httpStatus'

export type FieldErrorData = {
  name: string
  message: string
}

export default class HttpError extends Error {
  public status: HttpStatus
  public message: string
  public fields: FieldErrorData[]

  constructor(data: {
    status: HttpStatus
    message: string
    fields?: FieldErrorData[]
    logMessage?: string
    logLevel?: string
  }) {
    const { status, message, fields, logMessage, logLevel } = data

    super(message)
    Log.log(logMessage ?? message, logLevel ?? 'warn')

    this.status = status
    this.message = message
    this.fields = fields ?? []
  }
}
