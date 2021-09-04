import { Request, Response } from "express";
import { Service } from "../interfaces/service";
import serviceSchema from "../schemas/service.schema";

export const getServices = async (req: Request, res: Response) => {
    try {
        const services = await serviceSchema.find()
        return res.status(200).json(services);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const postService = async (req: Request, res: Response) => {
    try {
        const item: Service = req.body;
        const service = await serviceSchema.create(item);
        return res.status(200).json(service);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const deleteServices = async (req: Request, res: Response) => {
    try {
        await serviceSchema.deleteMany({});
        return res.status(200).json({ message: "All items have been deleted" });
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const getService = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const service = await serviceSchema.findById(id);
        return res.status(200).json(service);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const putService = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const item: Service = req.body;
        const service = await serviceSchema.findByIdAndUpdate(id, item, { new: true });
        return res.status(200).json(service);
    } catch (error: any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const deleteService = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const service = await serviceSchema.findByIdAndRemove(id);
        return res.status(200).json(service);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}