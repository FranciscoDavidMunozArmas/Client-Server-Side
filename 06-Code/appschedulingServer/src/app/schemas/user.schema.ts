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
            },
            date: Date
        }
    ]
},
    {
        timestamps: false,
        versionKey: false,
        collection: "users"
    });

export default model<User>("user", schema);