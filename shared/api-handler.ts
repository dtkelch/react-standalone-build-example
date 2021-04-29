import { NextApiHandler } from 'next'
export const handle = (fn: NextApiHandler): NextApiHandler => {
  return async (req, res) => {
    try {
      await fn(req, res)
    } catch (e) {
      console.log('API Error!', e)
      res.status(500).send(e.message)
      res.end()
    }
  }
}
