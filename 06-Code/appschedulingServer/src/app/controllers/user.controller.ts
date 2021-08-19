import { Request, Response } from 'express';
import userSchema from '../schemas/user.schema';
import fs, { fdatasync } from 'fs-extra';
import path from 'path';
import bcryptjs, { genSalt, genSaltSync } from 'bcryptjs';
import { User } from '../interfaces/user';


const saltRounds = 10;

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users: User[] = await userSchema.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: "error", error: error });
    }
}
export const deleteUsers = async (req: Request, res: Response) => {
    try {
        const response = await userSchema.deleteMany({});
        if (response) {
            const directory = path.resolve('uploads');
            if (directory) {
                fs.readdir(directory, (error, files) => {
                    for (const file of files) {
                        fs.unlink(path.join(directory, file));
                    }
                });
                return res.status(200).json({ message: "All users have been deleted" });
            }
        }
        return res.status(200).json({ message: "Something went wrong" });
    } catch (error) {
        return res.status(500).json({ message: "error", error: error });
    }
}
export const postUser = async (req: Request, res: Response) => {
    try {
        let { password } = req.body;
        password = bcryptjs.hashSync(password, bcryptjs.genSaltSync(saltRounds));
        let user = {
            name: req.body.name,
            password: password,
            photo: req.file?.path
        };
        const newUser = await userSchema.create(user);
        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await userSchema.findById(id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: "error", error: error });
    }
}
export const putUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = {
            name: req.body.name,
            photo: req.file?.path
        };
        const updatedUser = await userSchema.findByIdAndUpdate(id, user, { new: true });
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json({ message: "error", error: error });
    }
}
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deleteUser = await userSchema.findByIdAndDelete(id);
        if (deleteUser) {
            await fs.unlink(path.resolve(deleteUser.photo));
        }
        return res.status(200).json(deleteUser);
    } catch (error) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const allowAccess = async (req: Request, res: Response) => {
    try {
        const { name, password } = req.body;
        let result: boolean = false;
        let token: string = "";
        const user = await userSchema.findOne({name});
        if (user) {
            result = bcryptjs.compareSync(password, user?.password as string);
            if(result){
                console.log(password);
                token = user._id as string;
            }
        }
        return res.status(200).json({ token: token });
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}