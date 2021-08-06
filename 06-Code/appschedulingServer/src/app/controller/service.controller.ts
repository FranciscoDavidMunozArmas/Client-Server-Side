import { Request, Response } from 'express';

import { connect } from '../../config/database.config';
import { Service } from '../model/service.model';

export const getAll = async (req: Request, res: Response) => {
    try {
        const conn = await connect();
        const service = await conn.query("select * from service");
        return res.status(200).json(service[0]);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const post = async (req: Request, res: Response) => {
    try {
        const service: Service = req.body;
        const conn = await connect();
        await conn.query(`insert into service set ?`, [service]);
        return res.status(200).json(service);
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
        await conn.query("delete from service");
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
        const { serviceID } = req.params;
        const conn = await connect();
        const user = await conn.query("select * from service where service.servicecode=?", [serviceID]);
        return res.status(200).json(user[0]);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const put = async (req: Request, res: Response) => {
    try {
        const { serviceID }= req.params
        const service: Service = req.body;
        const conn = await connect();
        await conn.query(`update service set ? where service.servicecode = ?`, [service, serviceID]);
        return res.status(200).json(service);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteByID = async (req: Request, res: Response) => {
    try {
        const { serviceID } = req.params;
        const conn = await connect();
        await conn.query("delete from service where service.servicecode=?", [serviceID]);
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

export const getByName = async (req: Request, res: Response) => {
    try {
        const { serviceName } = req.params;
        const conn = await connect();
        const service = await conn.query("select * from service where service.servicename=?", [serviceName]);
        return res.status(200).json(service[0]);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteByName = async (req: Request, res: Response) => {
    try {
        const { serviceName } = req.params;
        const conn = await connect();
        await conn.query("delete from service where service.servicename=?", [serviceName]);
        return res.status(200).json({ 
            itemName: serviceName,
            message: "Item deleted" 
        });
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}