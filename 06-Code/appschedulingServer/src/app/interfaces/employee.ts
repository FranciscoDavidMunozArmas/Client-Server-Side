import { Document } from "mongoose";

export interface Employee extends Document {
    _id?: string,
    name: string
}