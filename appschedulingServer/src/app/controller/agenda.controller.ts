import { Request, Response } from 'express';

import { connect } from '../../config/database.config';
import { Agenda } from '../model/agenda.model';

export const getAll = async (req: Request, res: Response) => {
    try {
        const conn = await connect();
        const agenda = await conn.query("select * from agenda");
        return res.status(200).json(agenda[0]);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const post = async (req: Request, res: Response) => {
    try {
        const agenda: Agenda = req.body;
        const conn = await connect();
        await conn.query(`insert into agenda set ?`, [agenda]);
        return res.status(200).json(agenda);
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
        await conn.query("delete from agenda");
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
        const { agendaID } = req.params;
        const conn = await connect();
        const agenda = await conn.query("select * from agenda where agenda.agendacode=?", [agendaID]);
        return res.status(200).json(agenda[0]);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const put = async (req: Request, res: Response) => {
    try {
        const { agendaID }= req.params
        const agenda: Agenda = req.body;
        const conn = await connect();
        await conn.query(`update agenda set ? where agenda.agendacode = ?`, [agenda, agendaID]);
        return res.status(200).json(agenda);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteByID = async (req: Request, res: Response) => {
    try {
        const { agendaID } = req.params;
        const conn = await connect();
        await conn.query("delete from agenda where agenda.agendacode=?", [agendaID]);
        return res.status(200).json({ 
            itemID: agendaID ,
            message: "Item deleted" 
        });
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}