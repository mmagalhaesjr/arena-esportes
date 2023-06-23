
import scheduleRepositories from "../repositories/schedule-repositories.js"

interface GetScheduleParams {
    fieldDate: string;
    fieldId: number;
  }


async function getSchedule( {fieldDate, fieldId} : GetScheduleParams) {
    const schedule = await scheduleRepositories.getSchedule({fieldId, fieldDate});
  
    return schedule;
  }


const scheduleService = {
    getSchedule,
}
export default scheduleService