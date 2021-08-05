import { Request, Response } from 'express';

import { connect } from '../../config/database.config';

import { Appointment } from '../model/appointment.model';


export const getAll = async (req: Request, res: Response) => {
    try {
        const conn = await connect();
        const appointments = await conn.query("select * from appointment");
        return res.status(200).json(appointments[0]);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const post = async (req: Request, res: Response) => {
    try {
        const appointment: Appointment = req.body;
        const conn = await connect();
        await conn.query(`insert into appointment set ?`, [appointment]);
        return res.status(200).json(appointment);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteAll = async (req: Request, res: Response) => {
    try {
        const conn = await connect();
        await conn.query("delete from appointment");
        return res.status(200).json({ message: "Items deleted" });
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const getByID = async (req: Request, res: Response) => {
    try {
        const { appointmentID } = req.params;
        const conn = await connect();
        const appointment = await conn.query("select * from appointment where appointment.appointmentcode=?", [appointmentID]);
        return res.status(200).json(appointment[0]);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const put = async (req: Request, res: Response) => {
    try {
        const { appointmentID }= req.params
        const appointment: Appointment = req.body;
        const conn = await connect();
        await conn.query(`update appointment set ? where appointment.appointmentcode=?`, [appointment, appointmentID]);
        return res.status(200).json(appointment);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteByID = async (req: Request, res: Response) => {
    try {
        const { appointmentID } = req.params;
        const conn = await connect();
        await conn.query("delete from appointment where appointment.appointmentcode=?", [appointmentID]);
        return res.status(200).json({ 
            itemID: appointmentID ,
            message: "Item deleted" 
        });
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const getAllByUser = async (req: Request, res: Response) => {
    try {
        const { userID } = req.params;
        const conn = await connect();
        const appointment = await conn.query("select * from appointment where appointment.usercode=?", [userID]);
        return res.status(200).json(appointment[0]);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}