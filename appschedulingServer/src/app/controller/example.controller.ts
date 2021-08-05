import { Request, Response } from 'express';

import { connect } from '../../config/database.config';

/**
 * import { Employee } from '../model/su_modelo.model';
 */


export const getAll = async (req: Request, res: Response) => {
    try {
        return res.status(200).json({ message: "Works! "});
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const post = async (req: Request, res: Response) => {
    try {
        return res.status(200).json({ message: "Works! "});
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteAll = async (req: Request, res: Response) => {
    try {
        return res.status(200).json({ message: "Works! "});
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const getByID = async (req: Request, res: Response) => {
    try {
        return res.status(200).json({ message: "Works! "});
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const put = async (req: Request, res: Response) => {
    try {
        return res.status(200).json({ message: "Works! "});
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteByID = async (req: Request, res: Response) => {
    try {
        return res.status(200).json({ message: "Works! "});
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}