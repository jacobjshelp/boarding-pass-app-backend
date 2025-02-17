import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { dummyBoardingPasses } from './data'
dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000

app.get('/boardingPasses', (req: Request, res: Response) => {
  setTimeout(() => {
    res.json(dummyBoardingPasses)
  }, 3000)
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
