import { Router } from 'express'

const infoRouter = Router()

infoRouter.get('/', (_, res) =>
  res.render('info/index', {
    count: 5
  })
)

infoRouter.get('/account', (_, res) => res.render('info/account-tile'))

export default infoRouter
