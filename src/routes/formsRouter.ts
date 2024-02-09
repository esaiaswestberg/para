import { Router } from 'express'

const formsRouter = Router()

formsRouter.get('/register-payment', (_, res) =>
  res.render('forms/register-payment', {
    now: new Date().toISOString().split('T')[0]
  })
)

export default formsRouter
