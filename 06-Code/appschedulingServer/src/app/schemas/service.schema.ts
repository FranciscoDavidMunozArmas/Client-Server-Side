import { Schema, model } from "mongoose";
import { Service } from "../interfaces/service";

const schema = new Schema ({
    name: String,
    description: String
},
{
    timestamps: false,
    versionKey: false,
});

export default model<Service>("employee", schema);