import { Request, Response } from 'express';

import { connect } from '../../config/database.config';

import { ServiceEmployee } from '../model/serviceemployee.model';
import { AppointmentService } from '../model/appointmentservice.model';

export const getAll = async (req: Request, res: Response) => {
    try {
        const conn = await connect();
        const appointment = await conn.query("select * from appointmentservice");
        return res.status(200).json(appointment[0]);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const post = async (req: Request, res: Response) => {
    try {
        const register: AppointmentService=req.body;
        const conn = await connect();
        await conn.query(`insert into appointmentservice set ?`, [register]);
        return res.status(200).json(register);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}