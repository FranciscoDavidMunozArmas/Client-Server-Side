import { Request, Response } from 'express';

import { connect } from '../../config/database.config';

import { ServiceEmployee } from '../model/serviceemployee.model';


export const getAll = async (req: Request, res: Response) => {
    try {
        const conn = await connect();
        const serviceemployee = await conn.query("select * from serviceemployee");
        return res.status(200).json(serviceemployee[0]);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const post = async (req: Request, res: Response) => {
    try {
        const register: ServiceEmployee=req.body;
        const conn = await connect();
        await conn.query(`insert into serviceemployee set ?`, [register]);
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
        await conn.query("delete from serviceemployee");
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
        const {serviceID} = req.params;
        const conn = await connect();
        const service = await conn.query("select * from  serviceemployee  where serviceemployee.servicecode=?", [serviceID]);
        return res.status(200).json(service[0]);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const put = async (req: Request, res: Response) => {
    try {
        const { serviceID, employeeID }=req.params;
        const register: ServiceEmployee=req.body;
        const conn = await connect();
        await conn.query('update serviceemployee set ? where serviceemployee.servicecode = ? and serviceemployee.employeecode = ?', [register, serviceID, employeeID]);
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
        const { serviceID, employeeID }=req.params;
        const conn = await connect();
        await conn.query("delete from serviceemployee where serviceemployee.servicecode = ? and serviceemployee.employeecode = ?", [serviceID, employeeID]);
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

export const getByServiceID = async (req: Request, res: Response) => {
    try {
        const {serviceID} = req.params;
        const conn = await connect();
        const service = await conn.query("select * from  serviceemployee  where serviceemployee.servicecode=?", [serviceID]);
        return res.status(200).json(service[0]);
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
        await conn.query("delete from serviceemployee where serviceemployee.servicecode=?", [serviceID]);
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

export const getByEmployeeID = async (req: Request, res: Response) => {
    try {
        const {employeeID} = req.params;
        const conn = await connect();
        const service = await conn.query("select * from  serviceemployee  where serviceemployee.employeecode = ?", [employeeID]);
        return res.status(200).json(service[0]);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}


export const deleteByEmployeeID = async (req: Request, res: Response) => {
    try {
        const {employeeID}=req.params;
        const conn = await connect();
        await conn.query("delete from serviceemployee where serviceemployee.employeecode = ?", [employeeID]);
        return res.status(200).json({ 
            itemID: employeeID ,
            message: "Item deleted" 
        });
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}