import { Request, Response } from 'express';
import fieldServices from '../services/field-services.js'

async function getAllFields(req: Request, res: Response){
  try {
    const field = await fieldServices.getSoccerField();
    res.send(field);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
}

const fieldController = {
  getAllFields
}

export default fieldController;