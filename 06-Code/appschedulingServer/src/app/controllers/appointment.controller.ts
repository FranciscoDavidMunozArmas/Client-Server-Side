import { Request, Response } from "express";
import { Appointment } from "../interfaces/appointment";
import userSchema from "../schemas/user.schema";

export const getAppointments = async (req: Request, res: Response) => {
    try {
        const { userid } = req.params;
        const user = await userSchema.findById(userid);
        const appointments = user?.appointments;
        return res.status(200).json(appointments);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}
export const deleteAppointments = async (req: Request, res: Response) => {
    try {
        const { userid } = req.params;
        const user = await userSchema.findByIdAndUpdate(userid, { $pull: { appointments: {} } }, { new: true });
        return res.status(200).json(user?.appointments);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const postAppointment = async (req: Request, res: Response) => {
    try {
        const { userid } = req.params;
        const appointment: Appointment = req.body;
        const updateUser = await userSchema.findByIdAndUpdate(userid, {
            $push: {
                appointments: [appointment]
            }
        }, { new: true });
        return res.status(200).json(updateUser);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const getAppointment = async (req: Request, res: Response) => {
    try {
        const { userid, appointmentid } = req.params;
        const user = await userSchema.findById(userid);
        if (user) {
            const appointment = user.appointments.find((element: Appointment) => element._id == appointmentid);
            return res.status(200).json(appointment);
        }
        return res.status(200).json({ message: "Data not found" });
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const putAppointments = async (req: Request, res: Response) => {
    try {
        const { userid, appointmentid } = req.params;
        const appointment: Appointment = req.body;
        const user = await userSchema.findOneAndUpdate(
            { _id: userid, "appointments._id": appointmentid },
            { $set: { "appointments.$": appointment } },
            { new: true });
        return res.status(200).json(user?.appointments);
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}

export const deleteAppointment = async (req: Request, res: Response) => {
    try {
        const { userid, appointmentid } = req.params;
        const user = await userSchema.findOneAndUpdate(
            { _id: userid },
            { $pull: { appointments: { _id: appointmentid } } },
            { new: true });
        return res.status(200).json({ message: "Appointment deleted", itemID: appointmentid});
    } catch (error: any) {
        return res.status(500).json({ message: "error", error: error });
    }
}