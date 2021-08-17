import { Document } from "mongoose";

export interface Service extends Document {
    _id?: string,
    name: string,
    description: string
}