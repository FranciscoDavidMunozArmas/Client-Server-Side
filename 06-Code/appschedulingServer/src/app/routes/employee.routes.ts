import {Router} from 'express';
import * as employeeCotroller from '../controllers/employee.controller'
const router = Router();

router.route("/employee/:id")
    .put(employeeCotroller.putEmployee);


//get
//post
//put
//delete