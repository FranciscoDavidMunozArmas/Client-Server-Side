import { Schema, model } from "mongoose";
import { Employee } from "../interfaces/employee";

const schema = new Schema ({
    name: String
},
{
    timestamps: false,
    versionKey: false,
    collection: "employee"
});

export default model<Employee>("employee", schema);