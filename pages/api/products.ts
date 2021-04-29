import { NextApiRequest, NextApiResponse } from 'next'
import { handle } from 'shared/api-handler';
import { Product } from 'shared/types';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "GET") {
    const products: Product[] = [
      { id: 1, name: "1", price: 1 },
      { id: 2, name: "2", price: 2 },
      { id: 3, name: "3", price: 3 },
      { id: 4, name: "4", price: 4 },
      { id: 5, name: "5", price: 5 },
      { id: 6, name: "6", price: 6 },
      { id: 7, name: "7", price: 7 },
      { id: 8, name: "8", price: 8 },
      { id: 9, name: "9", price: 9 },
      { id: 10, name: "10", price: 10 },
    ]
    res.json(products)
    res.end()
  }

}

export default handle(handler)
