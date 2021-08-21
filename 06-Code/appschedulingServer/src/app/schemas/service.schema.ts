import { Schema, model } from "mongoose";
import { Service } from "../interfaces/service";

const schema = new Schema ({
    name: String,
    description: String
},
{
    timestamps: false,
    versionKey: false,
    collection: "service"
});

export default model<Service>("service", schema);