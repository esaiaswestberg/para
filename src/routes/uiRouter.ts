import { Router } from 'express'

const uiRouter = Router()

uiRouter.get('/floating-button', (_, res) =>
  res.render('ui/floating-button', {
    count: 5
  })
)

export default uiRouter
