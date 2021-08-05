import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import config from './config/config';

import userRouter from './app/routes/user.routes';
import employeeRouter from './app/routes/employee.routes';
import agendaRouter from './app/routes/agenda.routes';
import appointmentRouter from './app/routes/appointment.routes';
import appointmentserviceRouter from './app/routes/appointmentservice.routes';
import serviceRouter from './app/routes/service.routes';
import serviceemployeeRouter from './app/routes/serviceemployee.routes';

const app = express();

//settings
app.set("port", config.PORT);

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

//routes
app.use("/user", userRouter);
app.use("/employee", employeeRouter);
app.use("/agenda", agendaRouter);
app.use("/appointment", appointmentRouter);
app.use("/appointmentservice", appointmentserviceRouter);
app.use("/service", serviceRouter);
app.use("/serviceemployee", serviceemployeeRouter);

export default app;