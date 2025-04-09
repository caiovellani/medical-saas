'use server'

import prisma from '@/lib/prisma'

export async function getInfoSchedule({ userId }: { userId: string }) {
  try {
    if (!userId) null

    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      include: {
        subscription: true,
        services: true,
      },
    })

    if (!user) null

    return user
  } catch (err) {
    console.log(err)
  }
}
