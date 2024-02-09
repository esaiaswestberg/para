import { Router } from 'express'

const infoRouter = Router()

infoRouter.get('/', (req, res) =>
  res.render('info/index', {
    count: 5
  })
)

export default infoRouter
