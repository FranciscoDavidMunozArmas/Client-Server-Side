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
