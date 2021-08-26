import { Request, Response } from "express";
import { Employee } from "../interfaces/employee";
import userSchema from "../schemas/user.schema";

export const putEmployee = async (req: Request, res: Response) => {
    try{
        const {userName} = req.params;
        const employee: Employee  = req.body;
        const response = await userSchema.findByIdAndUpdate(userName, employee, {new: true});
        return res.status(200).json(response);
    }catch(error: any){
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const postEmployee = async (req: Request, res: Response) => {
    try {
        const { userName } = req.params;
        const employee: Employee = req.body;
        const updateEmployee = await userSchema.findByIdAndUpdate(userName, {
            $push: {
                employees: [employee]
            }
        }, { new: true });
        return res.status(200).json(updateEmployee);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}