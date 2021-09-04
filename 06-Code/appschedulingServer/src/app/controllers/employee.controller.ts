import { Request, Response } from "express";
import { Employee } from "../interfaces/employee";
import employeeSchema from "../schemas/employee.schema";

export const getEmployees = async (req: Request, res: Response) =>{
    try{
        const employees = await employeeSchema.find();
        return res.status(200).json(employees);
    }catch (error: any){
        return res.status(500).json({message: "error", error: error});
    }
}

export const postEmployee = async (req: Request, res: Response) => {
    try {
        const item: Employee = req.body;
        const employee = await employeeSchema.create(item);
        return res.status(200).json(employee);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const deleteEmployees = async (req: Request, res: Response) =>{
    try{
        await employeeSchema.deleteMany({});
        return res.status(200).json({ message: "All employees have been deleted "});
    }catch (error: any){
        return res.status(500).json({message: "error", error: error});
    }
}

export const getEmployee = async (req: Request, res: Response) =>{
    try{
        const { id } = req.params;
        const employee = await employeeSchema.findById(id);
        return res.status(200).json(employee);
    }catch (error: any){
        return res.status(500).json({message: "error", error: error});
    }
}

export const putEmployee = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const item: Employee  = req.body;
        const employee = await employeeSchema.findByIdAndUpdate(id, item, {new: true});
        return res.status(200).json(employee);
    }catch(error: any){
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteEmployee = async (req: Request, res: Response) =>{
    try{
        const { id } = req.params;
        const employee = await employeeSchema.findByIdAndRemove(id);
        return res.status(200).json(employee);
    }catch (error: any){
        return res.status(500).json({message: "error", error: error});
    }
}