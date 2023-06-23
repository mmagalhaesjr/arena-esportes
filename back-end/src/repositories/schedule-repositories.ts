import prisma from "../config/database.js"
import { Agenda } from '@prisma/client'

interface GetScheduleParams {
  fieldDate: string;
  fieldId: number;
}

async function getSchedule({ fieldId, fieldDate }: GetScheduleParams) {
  const startDate = new Date(fieldDate)
  const endDate = new Date(fieldDate)
  endDate.setDate(startDate.getDate() + 1);


  return await prisma.agenda.findMany({
    where: {
      id_quadra: fieldId,
      data: {
        gte: startDate,
        lt: endDate
      }

    },
  })
}

const scheduleRepositories = {
  getSchedule,
}
export default scheduleRepositories