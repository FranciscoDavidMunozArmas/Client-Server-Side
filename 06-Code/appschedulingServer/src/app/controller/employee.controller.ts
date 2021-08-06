import { Request, Response } from 'express';

import { connect } from '../../config/database.config';
import { Employee } from '../model/employee.model';

export const getAll = async (req: Request, res: Response) => {
    try {
        const conn = await connect();
        const employee = await conn.query("select * from employee");
        return res.status(200).json(employee[0]);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const post = async (req: Request, res: Response) => {
    try {
        const employee: Employee = req.body;
        const conn = await connect();
        await conn.query(`insert into employee set ?`, [employee]);
        return res.status(200).json(employee);
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
        await conn.query("delete from employee");
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
        const { employeeID } = req.params;
        const conn = await connect();
        const employee = await conn.query("select * from employee where employee.employeecode=?", [employeeID]);
        return res.status(200).json(employee[0]);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const put = async (req: Request, res: Response) => {
    try {
        const { employeeID }= req.params
        const employee: Employee = req.body;
        const conn = await connect();
        await conn.query(`update employee set ? where employee.employeecode = ?`, [employee, employeeID]);
        return res.status(200).json(employee);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteByID = async (req: Request, res: Response) => {
    try {
        const { employeeID } = req.params;
        const conn = await connect();
        await conn.query("delete from employee where employee.employeecode=?", [employeeID]);
        return res.status(200).json({ 
            itemID: employeeID ,
            message: "Item deleted" });
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}