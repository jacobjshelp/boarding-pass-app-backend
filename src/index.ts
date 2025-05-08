import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { dummyBoardingPasses } from './data'
import cors from 'cors'
dotenv.config()

const app: Express = express()
const port = process.env.PORT || 5000

app.use(cors())

app.get('/boardingPasses', (req: Request, res: Response) => {
  setTimeout(() => {
    res.json(dummyBoardingPasses)
  }, 3000)
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
