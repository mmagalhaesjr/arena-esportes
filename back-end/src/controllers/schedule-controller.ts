import { Request, Response } from "express";
import scheduleService from "../services/schedule-services.js"

async function getSchedule(req: Request, res: Response) {
  const fieldId = parseInt(req.params.id);
  const fieldDate = req.body.date

  try {
    const schedule = await scheduleService.getSchedule({fieldId, fieldDate});
    res.send(schedule);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.status(500).send(error.message);
    }
  }

}

const scheduleController = {
  getSchedule
}

export default scheduleController