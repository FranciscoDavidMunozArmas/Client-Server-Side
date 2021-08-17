import { Document } from "mongoose";
import { Appointment } from "./appointment";

export interface User extends Document{
    _id?:string,
    name: string,
    password: string,
    photo: string,
    appointments: Appointment[]
        // appointment: {
            // _id?: string
            // employee: {
            //     _id?: string,
            //     name: string
            // },
            // service: {
            //     _id?: string,
            //     name: string,
            //     description: string
            // }
            // employee: employee,
            // service: service
        // }
}