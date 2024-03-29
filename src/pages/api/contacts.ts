import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST'){
    res.status(405).json({ message: 'Method not allowed' })
  }
  const contactData = JSON.parse(req.body)
  const savedContact = await prisma.contact.create({
    data: contactData
  })

  res.json({ message: 'Success' })
}