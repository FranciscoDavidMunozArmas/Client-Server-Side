import { Request, Response } from 'express';

import { connect } from '../../config/database.config';

export const getUserByAgenda = async (req: Request, res: Response) => {
    try {
        const { agendaID } = req.params;
        const conn = await connect();
        const users = await conn.query("select * from agenda, user where user.usercode=agenda.usercode and agenda.agendacode=?", [agendaID]);
        return res.status(200).json(users[0]);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}
