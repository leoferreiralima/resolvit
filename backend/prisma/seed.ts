import {SingleBar } from 'cli-progress'
import {green,cyan,yellow } from 'colors'
import faker from 'faker'

import { Prisma, PrismaClient,PrismaPromise } from '@prisma/client'

import { Password } from '../src/utils/password'

import recipes from './recipes.json'

const progress = new SingleBar({
  format: `${yellow('{value}/{total}')} | ${green('{bar}')} | ${cyan('{step}')}`,
  barCompleteChar: '\u2588',
  barIncompleteChar: '\u2591',
  hideCursor: true
});

faker.setLocale('pt_BR')

const prisma = new PrismaClient()

type TimestampsDeleteManyArgs ={
  where?:{
    createdAt?: Prisma.DateTimeFilter | Date | string
  }
}

interface PrismaDelegate<GlobalRejectSettings>{
  deleteMany<T extends TimestampsDeleteManyArgs>(
    args?: Prisma.SelectSubset<T, TimestampsDeleteManyArgs>
  ) : PrismaPromise<Prisma.BatchPayload>
}


async function clear<T>(name:string, prismaDelegate:PrismaDelegate<T>) {
  progress.update({
    step: `Cleaning ${name}`
  })
  await prismaDelegate.deleteMany({
    where:{
      createdAt:{
        lt: new Date()
      }
    },
    
  })
}

async function main() {

  progress.start(3, 0, {
    step: "Initializing"
  });

  progress.increment({
    step: "Finished"
  })
}

main()
.catch(e => {
  progress.stop()
  console.error(e)
  process.exit(1)
})
.finally(async () => {
  await prisma.$disconnect()
  progress.stop()
  process.exit(0)
})