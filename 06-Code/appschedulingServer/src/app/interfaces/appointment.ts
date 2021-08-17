import { Employee } from "./employee";
import { Service } from "./service";

export interface Appointment {
    _id?: string
    employee: Employee,
    service: Service
}