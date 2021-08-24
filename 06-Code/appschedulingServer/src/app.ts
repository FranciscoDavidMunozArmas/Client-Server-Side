import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config/config';
import path from 'path';

import userRoutes from './app/routes/user.routes';

const app = express();

//settings
app.set("port", config.PORT);

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

//routes
app.use("/users", userRoutes);
app.use("/employee", userRoutes);
app.use("/service", userRoutes);

//static
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;