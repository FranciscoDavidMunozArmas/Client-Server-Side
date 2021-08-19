import { Employee } from "./Employee";
import { Service } from "./Service";

export interface Appointment{
    _id?: string
    employee: Employee,
    service: Service,
    date: Date
};