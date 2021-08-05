import { Request, Response } from 'express';

import { connect } from '../../config/database.config';
import { User } from '../model/user.model';

export const getAll = async (req: Request, res: Response) => {
    try {
        const conn = await connect();
        const users = await conn.query("select * from user");
        return res.status(200).json(users[0]);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const post = async (req: Request, res: Response) => {
    try {
        const user: User = req.body;
        const conn = await connect();
        await conn.query(`insert into user set ?`, [user]);
        return res.status(200).json(user);
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
        await conn.query("delete from user");
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
        const { userID } = req.params;
        const conn = await connect();
        const user = await conn.query("select * from user where user.usercode=?", [userID]);
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
        const { userID }= req.params
        const user: User = req.body;
        const conn = await connect();
        await conn.query(`update user set ? where user.usercode=?`, [user, userID]);
        return res.status(200).json(user);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteByID = async (req: Request, res: Response) => {
    try {
        const { userID } = req.params;
        const conn = await connect();
        await conn.query("delete from user where user.usercode=?", [userID]);
        return res.status(200).json({ 
            itemID: userID ,
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
        const { userName } = req.params;
        const conn = await connect();
        const user = await conn.query("select * from user where user.username=?", [userName]);
        return res.status(200).json(user[0]);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const postByNamePassword = async (req: Request, res: Response) => {
    try {
        const { username, userpassword } = req.body;
        console.log(username);
        const conn = await connect();
        const user = await conn.query("select * from user where user.username=? and user.userpassword=?", [username, userpassword]);
        return res.status(200).json(user[0]);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}


export const deleteByName = async (req: Request, res: Response) => {
    try {
        const { userName } = req.params;
        const conn = await connect();
        await conn.query("delete from user where user.username=?", [userName]);
        return res.status(200).json({ 
            itemName: userName,
            message: "Item deleted" 
        });
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}
