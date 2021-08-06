import { Request, Response } from 'express';

import { connect } from '../../config/database.config';

import { ServiceEmployee } from '../model/serviceemployee.model';
import { AppointmentService } from '../model/appointmentservice.model';


export const getAll = async (req: Request, res: Response) => {
    try {
        const conn = await connect();
        const appointment = await conn.query("select * from APPOINTMENTSERVICE");
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
        await conn.query(`insert into APPOINTMENTSERVICE set ?`, [register]);
        return res.status(200).json(register);
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
        await conn.query("delete from APPOINTMENTSERVICE");
        return res.status(200).json({ message: "Items deleted" });
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const getByIDs = async (req: Request, res: Response) => {
    try {
        const { serviceID, appointmentID }=req.params;
        const conn = await connect();
        const appointment = await conn.query("select * from  APPOINTMENTSERVICE where APPOINTMENTSERVICE.APPOINTMENTCODE = ? and APPOINTMENTSERVICE.SERVICECODE = ?", [appointmentID, serviceID]);
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
        const { serviceID, appointmentID }=req.params;
        const register: AppointmentService=req.body;
        const conn = await connect();
        await conn.query('update APPOINTMENTSERVICE set ? where APPOINTMENTSERVICE.APPOINTMENTCODE = ? and APPOINTMENTSERVICE.SERVICECODE = ?', [register, appointmentID, serviceID]);
        return res.status(200).json(register);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteByIDs = async (req: Request, res: Response) => {
    try {
        const { serviceID, appointmentID }=req.params;
        const conn = await connect();
        await conn.query("delete from APPOINTMENTSERVICE where APPOINTMENTSERVICE.APPOINTMENTCODE= ? and APPOINTMENTSERVICE.SERVICECODE= ?", [appointmentID, serviceID]);
        return res.status(200).json({ 
            itemID: serviceID ,
            message: "Item deleted" 
        });
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const getByAppointmentID = async (req: Request, res: Response) => {
    try {
        const {appointmentID} = req.params;
        const conn = await connect();
        const appointment = await conn.query("select * from APPOINTMENTSERVICE where APPOINTMENTSERVICE.APPOINTMENTCODE=?", [appointmentID]);
        return res.status(200).json(appointment[0]);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteByAppointmentID = async (req: Request, res: Response) => {
    try {
        const {appointmentID}=req.params;
        const conn = await connect();
        await conn.query("delete from APPOINTMENTSERVICE where APPOINTMENTSERVICE.APPOINTMENTCODE=?", [appointmentID]);
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


export const getByServiceID = async (req: Request, res: Response) => {
    try {
        const {serviceID} = req.params;
        const conn = await connect();
        const appointment = await conn.query("select * from  APPOINTMENTSERVICE where APPOINTMENTSERVICE.SERVICECODE=?", [serviceID]);
        return res.status(200).json(appointment[0]);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteByServiceID = async (req: Request, res: Response) => {
    try {
        const {serviceID}=req.params;
        const conn = await connect();
        await conn.query("delete from APPOINTMENTSERVICE where APPOINTMENTSERVICE.SERVICECODE=?", [serviceID]);
        return res.status(200).json({ 
            itemID: serviceID ,
            message: "Item deleted" 
        });
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}
