import { Service } from "../services/service";
import { Employee } from "./Employee";

export interface Appointment{
    _id?: string
    employee: Employee,
    service: Service,
    date: Date
};