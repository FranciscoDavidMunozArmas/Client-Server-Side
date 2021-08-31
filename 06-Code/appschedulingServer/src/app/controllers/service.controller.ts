import { Request, Response } from "express";
import { Service } from "../interfaces/service";
import serviceSchema from "../schemas/service.schema";
import userSchema from "../schemas/user.schema";

export const getService = async (req: Request, res: Response) =>{
    try{
        const { serviceID } = req.params;
        const user = await userSchema.findById(serviceID);
        return res.status(200).json(serviceID);
    } catch(error: any){
        return res.status(500).json({ message: "error", error: error });
    }
}

export const putService = async (req: Request, res: Response) =>{
    try {
        const {serviceID} = req.params;
        const service: Service = req.body;
        const putService = await serviceSchema.findByIdAndUpdate(serviceID,service,{new:true});
        return res.status(200).json(putService);     
    }catch(error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}


export const postService = async (req: Request, res: Response) => {
    try {
        const { serviceID } = req.params;
        const service: Service = req.body;
        const updateService = await serviceSchema.findByIdAndUpdate(serviceID, {
            $push: {
                services: [service]
            }
        }, { new: true });
        return res.status(200).json(updateService);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}