import { Schema, model } from "mongoose";
import { User } from "../interfaces/user";

const schema = new Schema({
    name: {
        type: String,
        unique: true
    },
    password: String,
    photo: String,
    appointments: [
        {
            employee: {
                name: String
            },
            service: {
                name: String,
                description: String
            }
        }
    ]
},
    {
        timestamps: false,
        versionKey: false,
    });

export default model<User>("user", schema);