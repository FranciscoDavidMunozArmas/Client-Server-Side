import { Schema, model } from "mongoose";
import { Employee } from "../interfaces/employee";

const schema = new Schema ({
    name: String
},
{
    timestamps: false,
    versionKey: false,
});

export default model<Employee>("employee", schema);