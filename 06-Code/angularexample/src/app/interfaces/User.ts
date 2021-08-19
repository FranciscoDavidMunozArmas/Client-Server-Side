import { Appointment } from "./Appointment";

export interface User{
    _id?:string,
    name: string,
    password: string,
    photo: string,
    appointments: Appointment[]
}